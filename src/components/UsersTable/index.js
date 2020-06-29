import React from 'react';
import StatusBadge from '../StatusBadge';
import {sortByDateString, minutesToHours} from '../../utils';

import './styles.scss';

const UsersTable = ({users}) => {
    const getDateColumns = () => {
        let dateColumns = [];
        for (let user of users) {
            for (let dateObj of user.data) {
                dateColumns.push(dateObj.date);
            }
        }
        dateColumns = [...new Set(dateColumns)];
        return dateColumns;
    }

    const getUserDataForTable = () => {
        let result = [];

        for (let user of users) {
            let newUserObj = {};
            newUserObj.name = user.name;
            newUserObj.status = user.status;
            let sortedData = user.data.sort((a, b) => sortByDateString(a,b));
            let total = 0;
            for (let dateObj of sortedData) {
                newUserObj[dateObj.date] = dateObj.minutes;
                total += dateObj.minutes;
            }
            newUserObj.total = total;
            result.push(newUserObj);
        }

        return result;
    }
    
    return <div className="users-table">
        <table className="users-table--main">
          <tbody>
            <tr>
              <th className="users-table--first-col">Name</th>
              {
                getDateColumns()
                .sort((a, b) => sortByDateString(a, b))
                .map(date => <th key={date}>{date}</th>)
              }
              <th>Status</th>
              <th>Total</th>
            </tr>
            {
              getUserDataForTable()
              .sort((a,b) => b.total - a.total)
              .map(user => (
                <tr>
                  <td className="users-table--first-col">{user.name}</td>
                  {
                    getDateColumns()
                    .sort((a, b) => sortByDateString(a, b))
                    .map((date, idx) => <td key={idx+user[date]}>{user[date] && minutesToHours(user[date])}</td>)
                  }
                  <td><StatusBadge status={user.status}/></td>
                  <td>{minutesToHours(user.total)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
}

export default UsersTable;