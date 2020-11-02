import React, { useCallback, useContext, useState } from 'react';
import Button from '../../components/ui/button/button';
import Input from '../../components/ui/input/input';
import classes from './profile.module.css';
import {AuthContext} from '../../context/auth-context';
import { Address, Preferences, User } from '../../models/profile/user';
import { withRouter } from 'react-router-dom';

function Profile(props:any) {

    const context = useContext(AuthContext);

    const [userData, setUserData] = useState(context.userData);
    const [readonly, setReadOnly] = useState(true);

    const onUserInputChange = useCallback((event, key: string) => {
        const value = event.target.value;
        let newData: User = { ...userData };
        newData[key] = value;
        setUserData(newData);
    }, []);

    const onUserAddressInputChange = useCallback((event, key: string) => {
        const value = event.target.value;
        let newData: User = { ...userData };
        let newAddressData: Address = { ...newData.address };
        newAddressData[key] = value;
        newData.address = newAddressData;
        setUserData(newData);
    }, []);


    const onPreferencesInputChange = useCallback((event, key: string) => {
         let preferences = event.target.value.split(',');
         if(preferences && preferences.length > 0){
            let newData: User = { ...userData };
            let newPreferenceData:Preferences = {...newData.preferences};
            newPreferenceData.contact = preferences;
            newData.preferences = newPreferenceData;
            setUserData(newData);
         }
    }, []);

    const renderPreferences = () => {
        let preferenceText = userData.preferences.contact.join(",");
        return <Input readonly={readonly} label="Prefences" value={preferenceText} placeholder="Enter preferences with ',' seperator" onChange={onPreferencesInputChange} type="text"></Input>
    }

    const cancelHandler = () => {
        if(readonly){
            props.history.goBack();
        }
        else{
            setReadOnly(true);
        }
    }


    const editHandler = () => {
        setReadOnly(false);
    }

    const saveHandler = () => {
        let  updatedUserData = {...userData};
        context.setUpdatedUserData(updatedUserData);
        setReadOnly(true);
    }

    return <div className={classes.Profile}>
        <div className={classes.UserContainer}>
            <div className={classes.UserInfoContainer}>
                <h5>User Info</h5>
                <Input readonly={readonly} label="Firs name" value={userData.first_name} placeholder="Enter first name" onChange={(event: any) => onUserInputChange(event, 'first_name')} type="text"></Input>
                <Input readonly={readonly} label="Other names" value={userData.other_names} placeholder="Enter other names" onChange={(event: any) => onUserInputChange(event, 'other_names')} type="text"></Input>
                <Input readonly={readonly} label="Mobile" value={userData.mobile} placeholder="Enter mobile number" onChange={(event: any) => onUserInputChange(event, 'mobile')} type="text"></Input>
                <Input readonly={readonly} label="Email" value={userData.email} placeholder="Enter email" onChange={(event: any) => onUserInputChange(event, 'email')} type="text"></Input>
                <Input readonly={readonly} label="Company" value={userData.company} placeholder="Enter company" onChange={(event: any) => onUserInputChange(event, 'company')} type="text"></Input>
            </div>
            <div className={classes.AddressContainer}>
                <h5>Address</h5>
                <Input readonly={readonly} label="Street" value={userData.address.street} placeholder="Enter street" onChange={(event: any) => onUserAddressInputChange(event, 'street')} type="text"></Input>
                <Input readonly={readonly} label="Town" value={userData.address.town} placeholder="Enter town" onChange={(event: any) => onUserAddressInputChange(event, 'town')} type="text"></Input>
                <Input readonly={readonly} label="Country" value={userData.address.county} placeholder="Enter country" onChange={(event: any) => onUserAddressInputChange(event, 'country')} type="text"></Input>
                <Input readonly={readonly} label="Post Code" value={userData.address.postcode} placeholder="Enter post code" onChange={(event: any) => onUserAddressInputChange(event, 'postcode')} type="text"></Input>
            </div>
        </div>
        <div className={classes.PreferencesContainer}>
            <h5>Contact Preferences</h5>
            {renderPreferences()}
        </div>
        <div className={classes.ButtonContainer}>
            <Button type="danger" onClick={cancelHandler}>Cancel</Button>
            {readonly ?  <Button type="primary" onClick={editHandler}>Edit</Button> : <Button type="primary" onClick={saveHandler}>Save</Button>  }
            
        </div>
    </div>

}

export default withRouter(Profile);