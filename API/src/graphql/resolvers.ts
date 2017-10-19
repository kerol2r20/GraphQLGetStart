import { CustomerModel } from '../mongoose/Customer';

const resolvers = {
    query: {
        Customers(obj: any, args: any, context: any, info: any) {
            return CustomerModel.find({}).exec();
        },
        Customer(obj: any, args: any, context: any, info: any) {
            return CustomerModel.findOne({CustomerName: args.CustomerName})
        }
    },
}

export default resolvers;