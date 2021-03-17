import * as React from 'react';
import {useMediaQuery} from '@material-ui/core'
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    TopToolbar,
    CloneButton,
    ShowButton,
    Filter,
    SimpleList,
} from 'react-admin';

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => {
    return(
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

const EditActions = ({ basePath, data, hasShow }) => (
    <TopToolbar>
        <CloneButton
            className="button-clone"
            basePath={basePath}
            record={data}
        />
        {hasShow && <ShowButton basePath={basePath} record={data} />}
    </TopToolbar>
);



export const Posts = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List filters={<PostFilter/>} {...props} >
            {isSmall ? (
            <SimpleList 
            primaryText={record => record.title} 
            secondaryText={record => `${record.views} views`} 
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}/>
            ) : (
            <Datagrid rowClick="edit" actions={<EditActions/>}>
               <TextField source="id" />
                <ReferenceField source="userId" reference="users" >
                    <TextField source="name" />
                </ReferenceField>
                {/* <TextField source="id" /> */}
                <TextField source="title" />
                {/* <TextField source="body" /> */}
                </Datagrid>
            )}
        </List>
    )
}

export const PostEdit = props => (
    <Edit title={<PostTitle/>} actions={<EditActions/>} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);