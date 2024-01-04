//This file contains the type definition for the blogs data
//it describes the shape of the data and  what data type each component should have

export type Socials = {
    facebook:string;
    x:string;
    linkedIn:string;
} 
export type User = {
    id:string;
    name:string;
    email:string;
    password:string;
    role: 'admin' | 'staff' | 'interns';
    image_url:string;
    socials:Socials
} 

export type Comment = {
    id:string;
    author:string;
    comment:string
}
export type Post ={
    id:string;
    image_url:string;
    title:string;
    description:string;
    author:string;
    likes:number;
    status: 'public' | 'private';
    date:string;
}

export type Activities = {
    id:string;
    name:string;
    tag:string
}

 