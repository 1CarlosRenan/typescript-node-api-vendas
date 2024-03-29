import { DataSource } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CreateProducts1671414188723 } from './migrations/1671414188723-CreateProducts';
import { CreateUsers1674933817869 } from './migrations/1674933817869-CreateUsers';
import { CreateUserTokens1677805827576 } from './migrations/1677805827576-CreateUserTokens';
import { CreateCustomers1608058533060 } from './migrations/1710723006053-CreateCustomers';
import { CreateOrders1710796197381 } from './migrations/1710796197381-CreateOrders';
import { AddCustomerIdToOrders1710796400026 } from './migrations/1710796400026-AddCustomerIdToOrders';
import { CreateOrdersProducts1710796632369 } from './migrations/1710796632369-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1710799417117 } from './migrations/1710799417117-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1710799552294 } from './migrations/1710799552294-AddProductIdToOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1671414188723,
    CreateUsers1674933817869,
    CreateUserTokens1677805827576,
    CreateCustomers1608058533060,
    CreateOrders1710796197381,
    AddCustomerIdToOrders1710796400026,
    CreateOrdersProducts1710796632369,
    AddOrderIdToOrdersProducts1710799417117,
    AddProductIdToOrdersProducts1710799552294,
  ],
});