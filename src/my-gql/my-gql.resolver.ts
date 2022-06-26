import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';

@ObjectType()
export class Data {
  @Field()
  dataString: string;
}

@Resolver((of) => Data)
export class MyGqlResolver {
  private myData: Data[] = [];
  @Query((returns) => [Data!])
  myQuery(): Data[] {
    return this.myData;
  }

  @Mutation((returns) => [Data!])
  addToMyData(@Args('dataString') dataString: string) {
    this.myData.push({ dataString });

    return this.myQuery();
  }
}
