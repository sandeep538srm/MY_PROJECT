import React from "react";

export default class UpdateFormComponent extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.update} className="w-50">
        <input
          type="number"
          placeholder="p_id"
          name="p_id"
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="p_name"
          name="p_name"
          className="form-control my-2"
        />
        <input
          type="number"
          placeholder="p_cost"
          name="p_cost"
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="p_cat"
          name="p_cat"
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="p_desc"
          name="p_desc"
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="p_img"
          name="p_img"
          className="form-control my-2"
        />
        <input type="submit" value="Update" className="btn btn-success" />
      </form>
    );
  }
}
