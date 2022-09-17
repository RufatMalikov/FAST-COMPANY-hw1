import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => {
                return (
                    <Qualitie
                        name={qual.name}
                        color={qual.color}
                        key={qual._id}
                    />
                );
            })}
        </>
    );
};
QualitiesList.propTypes = { qualities: PropTypes.array };
export default QualitiesList;
