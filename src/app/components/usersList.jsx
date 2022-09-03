import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import UserTable from "./usersTable";
import GroupList from "./groupList";
import Filter from "./filter";
import _ from "lodash";
const UsersList = ({ users, setUsers, professions }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const pageSize = 8;
    const handleDelete = (userId) => {
        return setUsers((prevState) =>
            prevState.filter((element) => element._id !== userId)
        );
    };
    const handleToogleBookMark = (id) => {
        const bookmarkValue = users.find((item) => item._id === id);
        if (!bookmarkValue.bookmark) {
            bookmarkValue.bookmark = true;
        } else {
            bookmarkValue.bookmark = false;
        }
        const newUsers = [...users];
        setUsers(newUsers);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        setInputSymbol("");
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    const [inputSymbol, setInputSymbol] = useState("");
    const handleChange = (e) => {
        setInputSymbol(e.target.value);
        setSelectedProf();
    };

    if (users) {
        const filteredUsersonSymbol = users.filter((user) =>
            user.name.toLowerCase().includes(inputSymbol.toLowerCase().trim())
        );

        const filteredUsers = selectedProf
            ? users.filter((user) => user.profession.name === selectedProf.name)
            : inputSymbol && filteredUsersonSymbol.length > 0
            ? filteredUsersonSymbol
            : users;

        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
            setInputSymbol("");
        };
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <>
                            {" "}
                            <Filter
                                filter={inputSymbol}
                                onChange={handleChange}
                            />
                            <UserTable
                                users={userCrop}
                                onDelete={handleDelete}
                                onToogleBookMark={handleToogleBookMark}
                                onSort={handleSort}
                                selectedSort={sortBy}
                            />
                        </>
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "ЗАГРУЗКА...";
};
UsersList.propTypes = {
    users: PropTypes.array,
    professions: PropTypes.array,
    setUsers: PropTypes.func.isRequired
};

export default UsersList;
