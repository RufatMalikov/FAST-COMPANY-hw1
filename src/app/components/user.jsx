import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";
const User = ({
    qualities,
    name,
    onDelete,
    onToogleBookMark,
    profession,
    rate,
    completedMeetings,
    bookmark,
    _id
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((qual) => {
                    return (
                        <Qualitie
                            name={qual.name}
                            color={qual.color}
                            key={qual._id}
                        />
                    );
                })}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <Bookmark
                    onToogleBookMark={onToogleBookMark}
                    id={_id}
                    bookmark={bookmark}
                />
            </td>

            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    qualities: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToogleBookMark: PropTypes.func.isRequired,
    profession: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
};

export default User;
