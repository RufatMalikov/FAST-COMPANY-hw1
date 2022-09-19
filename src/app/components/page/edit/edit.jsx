import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../../ui/editForm";
import api from "../../../api";
const Edit = () => {
    const params = useParams();
    const { userId } = params;
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {
                        <>
                            <div className="mb-4"></div>
                            {user ? <EditForm user={user} /> : "Загрузка.."}
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Edit;
