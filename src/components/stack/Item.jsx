import React from "react";

const Item = ({ name, progress, pWeek, pMonth }) => {
  return (
    <div className='col-lg-4 mb-5'>
      <div className='card mx-auto grow'>
        <div className='card-body p-0'>
          <div className='bg-white rounded-lg shadow p-4'>
            <h2 className='font-weight-bold text-center mb-4'>{name}</h2>

            <div className='progress accent'>
              <span className='progress-left'>
                <span className={`progress-bar progress-${progress}`}></span>
              </span>
              <span className='progress-right'>
                <span className='progress-bar'></span>
              </span>
              <div className='progress-value'>
                <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                  <div className='h2 font-weight-bold'>
                    {progress}
                    <sup className='small'>%</sup>
                  </div>
                </div>
              </div>
            </div>

            <div className='row text-center mt-4'>
              <div className='col-6 border-right'>
                <div className='font-weight-bold'>{pWeek}%</div>
                <span className='small text-gray'>Last week</span>
              </div>
              <div className='col-6'>
                <div className='font-weight-bold'>{pMonth}%</div>
                <span className='small text-gray'>Last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
