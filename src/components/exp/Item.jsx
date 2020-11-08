import React from "react";

const Item = ({ jobTitle, companyName, summary, startDate, endDate }) => {
  return (
    <div className='col-lg-12 mb-5'>
      <div className='card mx-auto zoom'>
        <div className='card-body p-0'>
          <div className='bg-white rounded-lg shadow p-4'>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div className='flex-grow-1'>
                <h3 className='mb-0'>{jobTitle}</h3>
                <div className='subheading mb-3'>{companyName}</div>
                <p>{summary}</p>
              </div>
              <div className='flex-shrink-0'>
                <span className='text-primary'>
                  {startDate} - {endDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
