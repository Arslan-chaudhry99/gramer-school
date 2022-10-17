<div class="card card-table mb-4">
  <div class="card-header">
    <h5 class="card-heading"> Latest Contracts</h5>
    <div class="card-header-more">
      <button
        class="btn-header-more"
        type="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-end text-sm">
        <a class="dropdown-item" href="#!">
          <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>Expand
        </a>
        <a class="dropdown-item" href="#!">
          <i class="far fa-window-minimize opacity-5 me-2"></i>Minimize
        </a>
        <a class="dropdown-item" href="#!">
          <i class="fas fa-redo opacity-5 me-2"></i>
          Reload
        </a>
        <a class="dropdown-item" href="#!">
          <i class="far fa-trash-alt opacity-5 me-2"></i> Remove{" "}
        </a>
      </div>
    </div>
  </div>
  <div class="card-body">
    <div class="preload-wrapper">
      <div class="table-responsive">
        <table
          class="table table-hover text-sm text-gray-700 mb-0"
          id="ordersDatatable"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Status</th>
              <th>Contract</th>
              <th>Date </th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle">
              <td>
                <div class="d-flex align-items-center">
                  <span class="avatar p-1 me-2">
                    <span class="avatar-text avatar-primary-light">N</span>
                  </span>
                  <div class="pt-1">
                    <strong>Nielsen Cobb</strong>
                    <br />
                    <span class="text-muted text-sm">
                      nielsencobb@memora.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <strong>Memora</strong>
                <br />
                <span class="text-muted">Graniteville</span>
              </td>
              <td>
                <span class="badge badge-success-light">
                  {" "}
                  <span class="indicator"></span>Open
                </span>
              </td>
              <td style={{minWidth:"125px"}}>
                <div class="d-flex align-items-center">
                  <span class="me-2">30%</span>
                  <div class="progress progress-table">
                    <div
                      class="progress-bar bg-undefined"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width:"30%"}}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{maxWidth:"120px"}}>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="me-3">2021/11/26</span>
                  <div>
                    <button
                      class="btn-header-more"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end text-sm">
                      <a class="dropdown-item" href="#!">
                        <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>
                        Expand
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-edit opacity-5 me-2"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-trash-alt opacity-5 me-2"></i>
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="avatar p-1 me-2"
                    src="dist/img/avatar-1.jpg"
                    alt="Margret Cote"
                  />
                  <div class="pt-1">
                    <strong>Margret Cote</strong>
                    <br />
                    <span class="text-muted text-sm">
                      margretcote@zilidium.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <strong>Zilidium</strong>
                <br />
                <span class="text-muted">Foxworth</span>
              </td>
              <td>
                <span class="badge badge-danger-light">
                  {" "}
                  <span class="indicator"></span>Closed
                </span>
              </td>
              <td style={{minWidth:"125px"}}>
                <div class="d-flex align-items-center">
                  <span class="me-2">13%</span>
                  <div class="progress progress-table">
                    <div
                      class="progress-bar bg-undefined"
                      role="progressbar"
                      aria-valuenow="13"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width:"30%"}}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{maxWidth:"120px"}}>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="me-3">2021/03/01</span>
                  <div>
                    <button
                      class="btn-header-more"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end text-sm">
                      <a class="dropdown-item" href="#!">
                        <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>
                        Expand
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-edit opacity-5 me-2"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-trash-alt opacity-5 me-2"></i>
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="avatar p-1 me-2"
                    src="dist/img/avatar-2.jpg"
                    alt="Rachel Vinson"
                  />
                  <div class="pt-1">
                    <strong>Rachel Vinson</strong>
                    <br />
                    <span class="text-muted text-sm">
                      rachelvinson@chorizon.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <strong>Chorizon</strong>
                <br />
                <span class="text-muted">Eastmont</span>
              </td>
              <td>
                <span class="badge badge-warning-light">
                  {" "}
                  <span class="indicator"></span>On Hold
                </span>
              </td>
              <td style={{minWidth:"125px"}}>
                <div class="d-flex align-items-center">
                  <span class="me-2">100%</span>
                  <div class="progress progress-table">
                    <div
                      class="progress-bar bg-undefined"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width:"100%"}}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{minWidth:"120px"}}>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="me-3">2021/07/03</span>
                  <div>
                    <button
                      class="btn-header-more"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end text-sm">
                      <a class="dropdown-item" href="#!">
                        <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>
                        Expand
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-edit opacity-5 me-2"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-trash-alt opacity-5 me-2"></i>
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <div class="d-flex align-items-center">
                  <span class="avatar p-1 me-2">
                    <span class="avatar-text avatar-warning-light">G</span>
                  </span>
                  <div class="pt-1">
                    <strong>Gabrielle Aguirre</strong>
                    <br />
                    <span class="text-muted text-sm">
                      gabrielleaguirre@comverges.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <strong>Comverges</strong>
                <br />
                <span class="text-muted">Whitewater</span>
              </td>
              <td>
                <span class="badge badge-info-light">
                  {" "}
                  <span class="indicator"></span>In Progress
                </span>
              </td>
              <td style={{minWidth:"125px"}}>
                <div class="d-flex align-items-center">
                  <span class="me-2">64%</span>
                  <div class="progress progress-table">
                    <div
                      class="progress-bar bg-undefined"
                      role="progressbar"
                      aria-valuenow="64"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width:"64%"}}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{maxWidth:"120px"}}>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="me-3">2021/08/07</span>
                  <div>
                    <button
                      class="btn-header-more"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end text-sm">
                      <a class="dropdown-item" href="#!">
                        <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>
                        Expand
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-edit opacity-5 me-2"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-trash-alt opacity-5 me-2"></i>
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="avatar p-1 me-2"
                    src="dist/img/avatar-4.jpg"
                    alt="Spears Collier"
                  />
                  <div class="pt-1">
                    <strong>Spears Collier</strong>
                    <br />
                    <span class="text-muted text-sm">
                      spearscollier@remold.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <strong>Remold</strong>
                <br />
                <span class="text-muted">Hebron</span>
              </td>
              <td>
                <span class="badge badge-success-light">
                  {" "}
                  <span class="indicator"></span>Open
                </span>
              </td>
              <td style={{minWidth:"125px"}}>
                <div class="d-flex align-items-center">
                  <span class="me-2">6%</span>
                  <div class="progress progress-table">
                    <div
                      class="progress-bar bg-undefined"
                      role="progressbar"
                      aria-valuenow="6"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width:"6%"}}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{maxWidth:"125px"}}>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="me-3">2021/05/23</span>
                  <div>
                    <button
                      class="btn-header-more"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end text-sm">
                      <a class="dropdown-item" href="#!">
                        <i class="fas fa-expand-arrows-alt opacity-5 me-2"></i>
                        Expand
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-edit opacity-5 me-2"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#!">
                        <i class="far fa-trash-alt opacity-5 me-2"></i>
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="me-2" id="categoryBulkActionOrders">
        <select
          class="form-select form-select-sm d-inline w-auto"
          name="categoryBulkAction"
        >
          <option>Bulk Actions</option>
          <option>Delete</option>
        </select>
        <button class="btn btn-sm btn-outline-primary align-top">Apply </button>
      </span>
    </div>
  </div>
</div>
