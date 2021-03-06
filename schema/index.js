import userSchema from './user';
import dataSchema from './data';
import groupSchema from './group';
import gameSchema from './game';

const linkSchema = `
type Query {
    _:Boolean
}

type Mutation {
    _:Boolean
}
`;

export default [linkSchema, userSchema, dataSchema, groupSchema, gameSchema];
