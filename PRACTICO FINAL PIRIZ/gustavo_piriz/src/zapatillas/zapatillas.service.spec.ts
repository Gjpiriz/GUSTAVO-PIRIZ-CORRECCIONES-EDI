import { Test, TestingModule } from '@nestjs/testing';
import { ZapatillasService } from './zapatillas.service';

describe('ZapatillasService', () => {
  let service: ZapatillasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZapatillasService],
    }).compile();

    service = module.get<ZapatillasService>(ZapatillasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
function expect(service: ZapatillasService) {
  throw new Error('Function not implemented.');
}

function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

