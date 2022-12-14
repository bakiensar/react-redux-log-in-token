import React from 'react'

const Category = ({ categoryProp }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">
            <a href={'#/category/' + categoryProp.slug}>{categoryProp.name}</a>
          </h4>
        </div>
        <div className="card-body">
          <img src={categoryProp.image} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default Category
