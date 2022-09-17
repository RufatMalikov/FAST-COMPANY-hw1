import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../../ui/editForm";
import api from "../../../api";
const Edit = () => {
    const params = useParams();
    const { userId } = params;
    const [user, setUser] = useState();
    const [professions, setProfession] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {
                        <>
                            <div className="mb-4"></div>
                            {professions.length > 0 && user ? (
                                <EditForm
                                    user={user}
                                    setUser={setUser}
                                    userId={userId}
                                />
                            ) : (
                                "Загрузка.."
                            )}
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Edit;
