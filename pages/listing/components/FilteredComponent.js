import React from 'react';
import styles from '../css/Listing.module.css';
import { Form, type } from "react-bootstrap";

const FilteredComponent = ({ myData }) => {
    const getFilterOptionList = () => {
        return myData && myData.list.map((items, index) => {
            return (

                <Form key={index}>
                    <div className="mb-3">
                        <Form.Check
                            type='checkbox'
                            id={index}
                            label={items.name}
                            className={styles.customCheckbox}
                        />
                    </div>
                </Form>
            )
        })
    }
    return (
        <div className={styles.filterDatawrapper}>
            {/* <div className={styles.filter_box} key={index}> */}
            <h5 className={styles.heading_filter}>{myData && myData.title}</h5>
            <div>
                {getFilterOptionList()}
            </div>
        </div>
    );
};

export default FilteredComponent;

