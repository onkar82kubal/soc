@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.access.users.management'))

@section('breadcrumb-links')
    @include('backend.auth.user.includes.breadcrumb-links')
@endsection

@section('content')
 
{!! Breadcrumbs::render() !!}
<div class="row clearfix">
    <div class="col-md-12">
        <div class="card">
            <div class="header">
                <h2>{{ __('labels.backend.access.users.management') }} </h2>
                <ul class="header-dropdown">
                            <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="{{ route('admin.auth.user.create') }}">Create User</a></li>
                                </ul>
                            </li>
                        </ul>
            </div>
            <div class="body table-responsive social_media_table">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>@lang('labels.backend.access.users.table.last_name')</th>
                            <th>@lang('labels.backend.access.users.table.first_name')</th>
                            <th>@lang('labels.backend.access.users.table.email')</th>
                            <th>@lang('labels.backend.access.users.table.confirmed')</th>
                            <th>@lang('labels.backend.access.users.table.roles')</th>
                            
                            <th>@lang('labels.backend.access.users.table.last_updated')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td><span class="list-name">{{ $user->last_name }}</span>
                                </td>
                                <td>{{ ucwords($user->first_name) }}</td>
                                <td>{{ $user->email }}</td>
                                <td>@include('backend.auth.user.includes.confirm', ['user' => $user])</td>
                                <td>{{ $user->roles_label }}</td>
                                <td>{{ $user->updated_at->diffForHumans() }}</td>
                                <td class="btn-td">@include('backend.auth.user.includes.actions', ['user' => $user])</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="col-7">
                    <div class="float-left">
                        {!! $users->total() !!} {{ trans_choice('labels.backend.access.users.table.total', $users->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $users->render() !!}
                    </div>
                </div><!--col-->
            </div>
                
        </div>  
    </div>
</div>
@endsection
