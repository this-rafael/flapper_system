import { RequiredAllOrOmitId } from '../types/ConstructorsBuildingTypes';

export class CustomerModel {
  readonly id?: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;


  constructor(builder: RequiredAllOrOmitId<CustomerModel>) {
    Object.assign(this, builder);
  }
}
