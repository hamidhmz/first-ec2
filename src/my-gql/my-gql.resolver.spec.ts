import { Test, TestingModule } from '@nestjs/testing';
import { MyGqlResolver } from './my-gql.resolver';

describe('MyGqlResolver', () => {
  let resolver: MyGqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyGqlResolver],
    }).compile();

    resolver = module.get<MyGqlResolver>(MyGqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
