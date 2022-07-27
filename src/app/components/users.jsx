import React from "react";
import User from "./user";

const Users = ({ onDelete, onToogleBookMark, userCrop }) => {
    return userCrop.map((user) => {
        return (
            <User
                {...user}
                user={user}
                onDelete={onDelete}
                onToogleBookMark={onToogleBookMark}
                key={user._id}
            />
        );
    });
};

export default Users;
