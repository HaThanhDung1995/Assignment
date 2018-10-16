import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import{actAddStaffRequest,actEditStaffRequest,actUpdateStaffRequest} from '../../Actions/Staff';
class StaffForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            sn: '',
            sp: '',
            sa: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        
    }
    componentDidMount() {
        var { match } = this.props;
        
        if (match.params.id) {
            var id = match.params.id;
            this.props.EditStaff(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.staffEditing){
            var {staffEditing}=nextProps;
            this.setState({
                id:staffEditing.Id,
                sn:staffEditing.Name,
                sa:staffEditing.Addr,
                sp:staffEditing.Phone
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var {id,sn,sa,sp}=this.state;
       
        var {history} =this.props;
        var staff={
            Id:id,
            Name:sn,
            Phone:sp,
            Addr:sa
        }
       if(id){
            this.props.UpdateStaff(staff);
       }
       else{this.props.AddStaff(staff);}
        history.goBack();    
       
       


    }

    
    
    
    render() {
        var { sn,sa,sp } = this.state;

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label >Name: </label>
                        <input type="text"
                            className="form-control"
                            name="sn"
                            value={sn}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Phone: </label>
                        <input type="text"
                            className="form-control"
                            name="sp"
                            value={sp}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Address: </label>
                        <input type="text"
                            className="form-control"
                            name="sa"
                            value={sa}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    
                    

                    
                    {/* <Link to="/product-list" className="btn btn-danger">
                        Trở lại
                    </Link> */}
                    <button type="submit" className="btn btn-primary">Lưu lại</button>

                </form>

            </div>



        );
    }
}
const mapStateToProps = state => {
    return {
        staffEditing:state.staffEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       AddStaff:(staff)=>{
            dispatch(actAddStaffRequest(staff));
       },
       EditStaff:(Id)=>{
           dispatch(actEditStaffRequest(Id));
       },
       UpdateStaff:(staff)=>{
           dispatch(actUpdateStaffRequest(staff));
       }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StaffForm);
