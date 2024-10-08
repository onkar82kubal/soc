import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { demoData, TreeNode, DropInfo } from './data';
import { debounce } from '@agentepsilon/decko';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NestableSettings } from 'ngx-nestable/lib/nestable.models';

@Component({
  selector: 'ico-nestable',
  templateUrl: './nestable.component.html',
  styleUrls: ['./nestable.component.scss'],
})
export class NestableComponent {
  public options = { fixedDepth: true } as NestableSettings;

  public list = [
    {
      id: 1,
      text: 'Founder & Director',
    },
    {
      expanded: true,
      id: 2,
      text: 'Project Lead',
      children: [
        {
          id: 2.1,
          text: 'UI UX Designer',
        },
        {
          id: 2.2,
          text: 'FrontEnd Developer',
        },
        {
          expanded: false,
          id: 2.3,
          text: 'Mobile Lead',
        },
      ],
    },
    {
      id: 3,
      text: 'Sales Lead',
    },
  ];

  nodes: TreeNode[] = demoData;

  groups = [
    {
      id: 1,
      title: 'Group 1',
      items: [
        {
          name: 'Founder & Director',
          st: 'bg-primary',
        },
        {
          name: 'Sales Lead',
          st: 'bg-secondary',
        },
        {
          name: 'eCommerce Master',
          st: 'bg-success',
        },
        {
          name: 'Angular Champ',
          st: 'bg-danger',
        },
        {
          name: 'FrontEnd Developer',
          st: 'bg-warning',
        },
      ],
    },
  ];

  public taskList = [
    {
      id: 1,
      title: 'Task List',
      items: [
        {
          isChecked: false,
          icon: 'icon-bell',
          text: 'New logo design for InfiniO project',
          badge_st: '',
          bage: '',
        },
        {
          isChecked: false,
          icon: '',
          text: 'Design PSD files for InfiniO',
          badge_st: 'badge badge-warning',
          bage: '1 Week',
        },
        {
          isChecked: false,
          icon: '',
          text: 'Deploy existing code to example.com',
          badge_st: '',
          bage: '',
        },
        {
          isChecked: true,
          icon: 'icon-calendar',
          text: 'Report Panel Usag',
          badge_st: '',
          bage: '',
        },
      ],
    },
  ];

  // ids for connected drop lists
  dropTargetIds = [];
  nodeLookup = {};
  dropActionTodo: DropInfo = null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.prepareDragDrop(this.nodes);
  }

  prepareDragDrop(nodes: TreeNode[]) {
    nodes.forEach((node) => {
      this.dropTargetIds.push(node.id);
      this.nodeLookup[node.id] = node;
      this.prepareDragDrop(node.children);
    });
  }

  @debounce(50)
  dragMoved(event) {
    let e = this.document.elementFromPoint(
      event.pointerPosition.x,
      event.pointerPosition.y
    );

    if (!e) {
      this.clearDragInfo();
      return;
    }
    let container = e.classList.contains('node-item')
      ? e
      : e.closest('.node-item');
    if (!container) {
      this.clearDragInfo();
      return;
    }
    this.dropActionTodo = {
      targetId: container.getAttribute('data-id'),
    };
    const targetRect = container.getBoundingClientRect();
    const oneThird = targetRect.height / 3;

    if (event.pointerPosition.y - targetRect.top < oneThird) {
      // before
      this.dropActionTodo['action'] = 'before';
    } else if (event.pointerPosition.y - targetRect.top > 2 * oneThird) {
      // after
      this.dropActionTodo['action'] = 'after';
    } else {
      // inside
      this.dropActionTodo['action'] = 'inside';
    }
    this.showDragInfo();
  }

  drop(event) {
    if (!this.dropActionTodo) return;

    const draggedItemId = event.item.data;
    const parentItemId = event.previousContainer.id;
    const targetListId = this.getParentNodeId(
      this.dropActionTodo.targetId,
      this.nodes,
      'main'
    );

    console.log(
      '\nmoving\n[' + draggedItemId + '] from list [' + parentItemId + ']',
      '\n[' +
        this.dropActionTodo.action +
        ']\n[' +
        this.dropActionTodo.targetId +
        '] from list [' +
        targetListId +
        ']'
    );

    const draggedItem = this.nodeLookup[draggedItemId];

    const oldItemContainer =
      parentItemId != 'main'
        ? this.nodeLookup[parentItemId].children
        : this.nodes;
    const newContainer =
      targetListId != 'main'
        ? this.nodeLookup[targetListId].children
        : this.nodes;

    let i = oldItemContainer.findIndex((c) => c.id === draggedItemId);
    oldItemContainer.splice(i, 1);

    switch (this.dropActionTodo.action) {
      case 'before':
      case 'after':
        const targetIndex = newContainer.findIndex(
          (c) => c.id === this.dropActionTodo.targetId
        );
        if (this.dropActionTodo.action == 'before') {
          newContainer.splice(targetIndex, 0, draggedItem);
        } else {
          newContainer.splice(targetIndex + 1, 0, draggedItem);
        }
        break;

      case 'inside':
        this.nodeLookup[this.dropActionTodo.targetId].children.push(
          draggedItem
        );
        this.nodeLookup[this.dropActionTodo.targetId].isExpanded = true;
        break;
    }

    this.clearDragInfo(true);
  }
  getParentNodeId(
    id: string,
    nodesToSearch: TreeNode[],
    parentId: string
  ): string {
    for (let node of nodesToSearch) {
      if (node.id == id) return parentId;
      let ret = this.getParentNodeId(id, node.children, node.id);
      if (ret) return ret;
    }
    return null;
  }
  showDragInfo() {
    this.clearDragInfo();
    if (this.dropActionTodo) {
      this.document
        .getElementById('node-' + this.dropActionTodo.targetId)
        .classList.add('drop-' + this.dropActionTodo.action);
    }
  }
  clearDragInfo(dropped = false) {
    if (dropped) {
      this.dropActionTodo = null;
    }
    this.document
      .querySelectorAll('.drop-before')
      .forEach((element) => element.classList.remove('drop-before'));
    this.document
      .querySelectorAll('.drop-after')
      .forEach((element) => element.classList.remove('drop-after'));
    this.document
      .querySelectorAll('.drop-inside')
      .forEach((element) => element.classList.remove('drop-inside'));
  }

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getConnectedList(): any[] {
    return this.groups.map((x) => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }
}
