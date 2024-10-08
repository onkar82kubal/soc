import React from "react";


class ColorsCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Colors</h2>
                        </div>
                        <div class="body">
                            <p class="text-primary">.text-primary</p>
                            <p class="text-secondary">.text-secondary</p>
                            <p class="text-success">.text-success</p>
                            <p class="text-danger">.text-danger</p>
                            <p class="text-warning">.text-warning</p>
                            <p class="text-info">.text-info</p>
                            <p class="text-light bg-dark">.text-light</p>
                            <p class="text-dark">.text-dark</p>
                            <p class="text-body">.text-body</p>
                            <p class="text-muted">.text-muted</p>
                            <p class="text-white bg-dark">.text-white</p>
                            <p class="text-black-50">.text-black-50</p>
                            <p class="text-white-50 bg-dark">.text-white-50</p>
                        </div>
                    </div>
    );
  }
}
export default ColorsCard
