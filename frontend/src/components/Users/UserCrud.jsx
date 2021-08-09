import React, {Component} from "react"
import Main from "../template/Main"
import axios from 'axios'

const headerProps = {
    icon: "users",
    title:"Cadastro",
    subtitle: "CRUD de usuários"
}

const initialState = {
    user: {name: '', email: ''},
    list: []
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component{
    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => this.setState({list: resp.data}))
    }

    clear(){
        this.setState({user: initialState.user})
    }

    insert(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({user : initialState.user, list})
            })
    }
    
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return (
            <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.user.name} placeholder="Enter your name..." onChange={e => this.updateField(e)}></input>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" value={this.state.user.email} placeholder="Enter you email..." onChange={e => this.updateField(e)}></input>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={e => this.insert(e)}>
                        Save
                    </button>
                    <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        )
        
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.state.list.filter(u => u !== user)

            this.setState({list})
        })
    }

    renderTable(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Edit this user">
                            <button className="btn btn-primary" onClick={e => this.load(item)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                        </span>

                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Dele this user">
                            <button className="btn btn-danger ml-3" onClick={e => this.remove(item)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </span>
                    </td>
                </tr>
            )
        })
    }


    // <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Edit this user">
    //     <button className="btn btn-primary" onClick={e => this.load(item)}>
    //         <i className="fa fa-pencil"></i>
    //     </button>
    // </span>

    // <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Dele this user">
    //     <button className="btn btn-danger ml-3" onClick={e => this.remove(item)}>
    //         <i className="fa fa-trash"></i>
    //     </button>
    // </span>
    

    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}