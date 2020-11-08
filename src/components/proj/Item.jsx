import React from "react";

const Item = ({ projectName, language, projectURL }) => {
  return (
    <div className='col-lg-4 col-xl-4 col-md-6 col-sm-6 col-12 mx-lg-2 mb-5'>
      <div className='grow card mx-auto'>
        <div className='card-body p-0'>
          <div className='bg-white rounded-lg shadow'>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div className='Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source reorderable sortable-button-item'>
                <div className='pinned-item-list-item-content'>
                  <div className='d-flex width-full flex-items-center position-relative'>
                    <svg
                      className='octicon octicon-repo mr-2 text-gray flex-shrink-0'
                      viewBox='0 0 16 16'
                      version='1.1'
                      width='16'
                      height='16'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
                      ></path>
                    </svg>
                    <a
                      className='text-bold flex-auto min-width-0'
                      href={projectURL}
                    >
                      <span className='repo'>{projectName}</span>
                    </a>
                    <input
                      type='hidden'
                      name='pinned_item_ids[]'
                      id='pinned-item-reorder-MDEwOlJlcG9zaXRvcnkyNTkxMzM4MDg='
                      value='MDEwOlJlcG9zaXRvcnkyNTkxMzM4MDg='
                      className='form-control'
                    />
                  </div>

                  <p className='pinned-item-desc text-gray text-small d-block mt-2 mb-3'>
                    {projectName}
                  </p>

                  <div className={`circle ${language}`}></div>
                  <span className='pl-1'>language</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
