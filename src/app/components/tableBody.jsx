import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        {
            if (columns[column].component) {
                const component = columns[column].component;
                if (typeof component === "function") {
                    return component(item);
                }
            }
            columns[column].component;
        }
        if (columns[column].path === "name") {
            return (
                <a className="nav-link" href={`/users/${item._id}`}>
                    {_.get(item, columns[column].path)}
                </a>
            );
        }
        return _.get(item, columns[column].path);
    };
    // console.log(data);
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;
