import React from "react";
import User from "./user";
import PropTypes from "prop-types";

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

Users.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onToogleBookMark: PropTypes.func.isRequired,
    userCrop: PropTypes.array.isRequired
};
export default Users;
