import React from "react"
import Main from "../template/Main"

export default function home(props){
    return (
        <Main icon="home" title="beginning" subtitle="Segundo projeto de react">
                <div className="display-4">
                    bem vindo
                </div>
                <hr />
                <div className="p-2">
                    Sistema para treinar React !!!
                </div>
        </Main>
    )
}