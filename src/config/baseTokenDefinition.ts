/* eslint-disable prefer-const */
import { TypedMap } from "@graphprotocol/graph-ts";
import { ADDRESS_ZERO } from "./constants";

class BasePool {
  pathIdx: i32[];
  path: string[];
  pathStartBlock: i32[];
  priority: i32;
}

export class BaseTokenDefinition {
  static mainnet(): TypedMap<string, BasePool> {
    const WBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
    const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f";
    const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    const OHM = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5";
    const OCEAN = "0x967da4048cd07ab37855c090aaf366e4ce1b9f48";

    const WBTC_USDC = "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35";
    const USDC_WETH = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
    const DAI_USDC = "0x6c6bc977e13df9b0de53b251522280bb72383700";
    const USDC_USDT = "0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf";
    // const OHM_USDC = "0x893f503fac2ee1e5b78665db23f9c94017aae97d"
    const OHM_ETH = "0x584ec2562b937c4ac0452184d8d83346382b5d3a";
    const OCEAN_ETH = "0x283e2e83b7f3e297c4b7c02114ab0196b001a109";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 6,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(DAI, {
      pathIdx: [1],
      path: [DAI_USDC],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDC_WETH],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WBTC, {
      pathIdx: [1],
      path: [WBTC_USDC],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(OHM, {
      pathIdx: [1, 0],
      path: [OHM_ETH, USDC_WETH],
      pathStartBlock: [0, 0],
      priority: 1,
    });
    lookup.set(OCEAN, {
      pathIdx: [1, 0],
      path: [OCEAN_ETH, USDC_WETH],
      pathStartBlock: [0, 0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static polygon(): TypedMap<string, BasePool> {
    const WBTC = "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6";
    const WETH = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
    const DAI = "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063";
    const USDT = "0xc2132d05d31c914a87c6611c10748aeb04b58e8f";
    const USDCe = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
    const USDC = "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359";
    const WMATIC = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
    const MIMATIC = "0xa3fa99a148fa48d14ed51d610c367c61876997f1"; // MAI
    const MATICX = "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6";
    const STMATIC = "0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4";
    const FRAX = "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89";
    const RETRO = "0xbfa35599c7aebb0dace9b5aa3ca5f2a79624d8eb";
    const CASH = "0x5d066d022ede10efa2717ed3d79f22f949f8c175";
    const LINK = "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39";
    const STAR = "0xc19669a405067927865b40ea045a2baabbbe57f5";
    const ERN = "0xc3a9a54c043f348027fffaac0f2f996123a19bf4";

    const WBTC_USDCe = "0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5";
    const USDCe_WETH = "0x45dda9cb7c25131df268515131f647d726f50608";
    const DAI_USDCe = "0x5f69c2ec01c22843f8273838d570243fd1963014";
    const USDCe_USDT = "0x3f5228d0e7d75467366be7de2c31d0d098ba2c23";
    const WMATIC_USDCe = "0xa374094527e1673a86de625aa59517c5de346d32";
    const USDCe_MIMATIC = "0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6";
    const WMATIC_MATICX = "0x05bfe97bf794a4db69d3059091f064ea0a5e538e";
    const WMATIC_STMATIC = "0x64c01d2b748e5deba661ce58393e6ee0e151a1ee";
    const USDCe_RETRO = "0xc7d8b9c270d0e31a6a0cf4496fe019766be42e15";
    const USDCe_CASH = "0x619259f699839dd1498ffc22297044462483bd27";
    const FRAX_CASH = "0x72289129dc4937a5d406d1eced8b2a17d007a650";
    const LINK_WETH = "0xab52931301078e2405c3a3ebb86e11ad0dfd2cfd";
    const USDCe_STAR = "0x6de0ca91ef19a6ce9f02a423ae2df89fe09bff0f";
    const CASH_ERN = "0x777a87889f42c33f9a1e5c117774694bbd857075";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDCe, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 15,
    });
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 14,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDCe_USDT],
      pathStartBlock: [0],
      priority: 13,
    });
    lookup.set(DAI, {
      pathIdx: [0],
      path: [DAI_USDCe],
      pathStartBlock: [0],
      priority: 12,
    });
    lookup.set(WMATIC, {
      pathIdx: [1],
      path: [WMATIC_USDCe],
      pathStartBlock: [0],
      priority: 11,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDCe_WETH],
      pathStartBlock: [0],
      priority: 10,
    });
    lookup.set(WBTC, {
      pathIdx: [1],
      path: [WBTC_USDCe],
      pathStartBlock: [0],
      priority: 9,
    });
    lookup.set(MIMATIC, {
      pathIdx: [0],
      path: [USDCe_MIMATIC],
      pathStartBlock: [0],
      priority: 8,
    });
    lookup.set(CASH, {
      pathIdx: [0],
      path: [USDCe_CASH],
      pathStartBlock: [44937000],
      priority: 7,
    });
    lookup.set(FRAX, {
      pathIdx: [1, 0],
      path: [FRAX_CASH, USDCe_CASH],
      pathStartBlock: [0, 0],
      priority: 6,
    });
    lookup.set(RETRO, {
      pathIdx: [0],
      path: [USDCe_RETRO],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(LINK, {
      pathIdx: [1, 0],
      path: [LINK_WETH, USDCe_WETH],
      pathStartBlock: [0, 0],
      priority: 4,
    });
    lookup.set(MATICX, {
      pathIdx: [0, 1],
      path: [WMATIC_MATICX, WMATIC_USDCe],
      pathStartBlock: [0, 0],
      priority: 3,
    });
    lookup.set(STMATIC, {
      pathIdx: [0, 1],
      path: [WMATIC_STMATIC, WMATIC_USDCe],
      pathStartBlock: [0, 0],
      priority: 2,
    });
    lookup.set(STAR, {
      pathIdx: [0],
      path: [USDCe_STAR],
      pathStartBlock: [46110898],
      priority: 1,
    });
    lookup.set(ERN, {
      pathIdx: [0, 0],
      path: [CASH_ERN, USDCe_CASH],
      pathStartBlock: [45606061, 44937000],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static arbitrumOne(): TypedMap<string, BasePool> {
    const WBTC = "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f";
    const WETH = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
    const DAI = "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";
    const USDT = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
    const USDCe = "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
    const USDC = "0xaf88d065e77c8cc2239327c5edb3a432268e5831";
    const LUSD = "0x93b346b6bc2548da6a1e7d98e9a421b42541425b";
    const FRAX = "0x17fc002b466eec40dae837fc4be5c67993ddbd6f";
    const WSTETH = "0x5979d7b546e38e414f7e9822514be443a4800529";
    const MAI = "0x3f56e0c36d275367b8c502090edf38289b3dea0d";
    const ARB = "0x912ce59144191c1204e64559fe8253a0e49e6548";
    const ERN = "0xa334884bf6b0a066d553d19e507315e839409e62";
    const stERN = "0xf7a0dd3317535ec4f4d29adf9d620b3d8d5d5069";
    const TIA = "0xd56734d7f9979dd94fae3d67c7e928234e71cd4c";

    const WBTC_USDC = "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee";
    const USDC_WETH = "0x17c14d2c404d167802b16c450d3c99f88f2c4f4d";
    const DAI_USDC = "0xd37af656abf91c7f548fffc0133175b5e4d3d5e6";
    const USDC_USDT = "0x13398e27a21be1218b6900cbedf677571df42a48";
    const LUSD_USDC = "0xf9a23aadf4b64ba7e4ffa60a6901d4d5adba534a";
    const FRAX_USDC = "0x6a9d961c9602fb484ba3c47c5f822b66721c9669";
    const WSTETH_USDC = "0x3ca631bbef7daf9dbb4d3f57a2de9038e7442b39";
    const MAI_USDC = "0x298130471f14e9e6c6c607be648feaabc1fa48a6";
    const ARB_USDC = "0xcda53b1f66614552f834ceef361a8d12a0b8dad8";
    const ERN_USDT = "0x4c5ca4d3ba53de6ab7efbc9ae692889e216ef5d4";
    const ERN_stERN = "0x9b873cef94f98c558af111c514cc69f00ad4c0f0";
    const ETH_TIA = "0x1818ff61ba19c06a554c803ed98b603d5b7d1b43";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 13,
    });
    lookup.set(USDCe, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 12,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 11,
    });
    lookup.set(DAI, {
      pathIdx: [1],
      path: [DAI_USDC],
      pathStartBlock: [0],
      priority: 10,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [USDC_WETH],
      pathStartBlock: [0],
      priority: 9,
    });
    lookup.set(WBTC, {
      pathIdx: [1],
      path: [WBTC_USDC],
      pathStartBlock: [0],
      priority: 8,
    });
    lookup.set(LUSD, {
      pathIdx: [1],
      path: [LUSD_USDC],
      pathStartBlock: [0],
      priority: 7,
    });
    lookup.set(FRAX, {
      pathIdx: [1],
      path: [FRAX_USDC],
      pathStartBlock: [0],
      priority: 6,
    });
    lookup.set(WSTETH, {
      pathIdx: [1],
      path: [WSTETH_USDC],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(MAI, {
      pathIdx: [1],
      path: [MAI_USDC],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(ARB, {
      pathIdx: [1],
      path: [ARB_USDC],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(ERN, {
      pathIdx: [1, 0],
      path: [ERN_USDT, USDC_USDT],
      pathStartBlock: [103546734, 0],
      priority: 2,
    });
    lookup.set(stERN, {
      pathIdx: [0, 1, 0],
      path: [ERN_stERN, ERN_USDT, USDC_USDT],
      pathStartBlock: [122464362, 103546734, 0],
      priority: 1,
    });
    lookup.set(TIA, {
      pathIdx: [0],
      path: [ETH_TIA],
      pathStartBlock: [195130638],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static optimism(): TypedMap<string, BasePool> {
    const WBTC = "0x68f180fcce6836688e9084f035309e29bf0a2095";
    const WETH = "0x4200000000000000000000000000000000000006";
    const DAI = "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";
    const USDT = "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58";
    const USDC = "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
    const alUSD = "0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a";
    const WSTETH = "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb";
    const OP = "0x4200000000000000000000000000000000000042";

    const WETH_WBTC = "0x73b14a78a0d396c521f954532d43fd5ffe385216";
    const WETH_USDC = "0x85149247691df622eaf1a8bd0cafd40bc45154a9";
    const USDC_DAI = "0x100bdc1431a9b09c61c0efc5776814285f8fb248";
    const USDC_USDT = "0xf3f3433c3a97f70349c138ada81da4d3554982db";
    const USDC_alUSD = "0xf3ade441be8c0579ca8d0b05ca33ed35dd90338c ";
    const WSTETH_WETH = "0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c";
    const OP_USDC = "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 7,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 6,
    });
    lookup.set(DAI, {
      pathIdx: [0],
      path: [USDC_DAI],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 1],
      path: [WETH_WBTC, WETH_USDC],
      pathStartBlock: [0, 0],
      priority: 3,
    });
    lookup.set(alUSD, {
      pathIdx: [0],
      path: [USDC_alUSD],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WSTETH, {
      pathIdx: [1, 1],
      path: [WSTETH_WETH, WETH_USDC],
      pathStartBlock: [0, 0],
      priority: 1,
    });
    lookup.set(OP, {
      pathIdx: [1],
      path: [OP_USDC],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static celo(): TypedMap<string, BasePool> {
    // const WBTC = "0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b"
    const WETH = "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207";
    // const DAI = ""  No DAI on celo uniswap
    // const USDT = ""  No USDT on celo uniswap
    const USDC = "0x37f750b7cc259a2f741af45294f6a16572cf5cad";
    const CELO = "0x471ece3750da237f93b8e339c536989b8978a438";
    const cUSD = "0x765de816845861e75a25fca122bb6898b8b1282a";

    // const CELO_WBTC = ""
    const CELO_WETH = "0xd88d5f9e6c10e6febc9296a454f6c2589b1e8fae";
    // const DAI_USDC = ""
    // const USDC_USDT = ""
    const CELO_cUSD = "0x079e7a44f42e9cd2442c3b9536244be634e8f888";
    const USDC_cUSD = "0xea3fb6e3313a2a90757e4ca3d6749efd0107b0b6";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 6,
    });
    lookup.set(cUSD, {
      pathIdx: [0],
      path: [USDC_cUSD],
      pathStartBlock: [0],
      priority: 5,
    });
    // lookup.set(USDT, { pool: USDC_USDT, pathIdx: [0], path: [], priority: 4 });
    // lookup.set(DAI, { pool: DAI_USDC, pathIdx: [0], path: [], priority: 3 });
    lookup.set(CELO, {
      pathIdx: [1, 0],
      path: [CELO_cUSD, USDC_cUSD],
      pathStartBlock: [0, 0],
      priority: 2,
    });
    lookup.set(WETH, {
      pathIdx: [0, 1, 0],
      path: [CELO_WETH, CELO_cUSD, USDC_cUSD],
      pathStartBlock: [0, 0, 0],
      priority: 1,
    });
    // lookup.set(WBTC, { pool: WBTC_USDC, pathIdx: [1], path: [], priority: 0 });

    return lookup as TypedMap<string, BasePool>;
  }

  static bsc(): TypedMap<string, BasePool> {
    const BTCB = "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
    const WETH = "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    const WBNB = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
    const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    const USDT = "0x55d398326f99059ff775485246999027b3197955";
    const USDC = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
    const ANKRBNB = "0x52f24a5e03aee338da5fd9df68d2b6fae1178827";
    const BNBX = "0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275";
    const FRXETH = "0x64048a7eecf3a2f1ba9e144aac3d7db6e58f555e";
    const FRAX = "0x90c97f71e18723b0cf0dfa30ee176ab653e89f40";
    const DOLA = "0x2f29bc0ffaf9bff337b31cbe6cb5fb3bf12e5840";
    const STKBNB = "0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16";
    // const ERN = "0xce1e3cc1950d2aaeb47de04de2dec2dc86380e0a";
    const OATH = "0xd3c6ceedd1cc7bd4304f72b011d53441d631e662";
    const MATIC = "0xcc42724c6683b7e57334c4e856f4c9965ed682bd";

    const USDT_USDC = "0x2c3c320d49019d4f9a92352e947c7e5acfe47d68";
    const USDT_BUSD = "0x84e47c7f2fe86f6b5efbe14fee46b8bb871b2e05";
    const WBNB_BUSD = "0x32776ed4d96ed069a2d812773f0ad8ad9ef83cf8";
    const WETH_WBNB = "0x4fb87838a29b37598099ef5aa6b3fbeeef987c50";
    const BTCB_WBNB = "0x28df0835942396b7a1b7ae1cd068728e6ddbbafd";
    const ANKRBNB_WBNB = "0x2f6c6e00e517944ee5efe310cd0b98a3fc61cb98";
    const BNBX_WBNB = "0xf2a4e4261fcdfbb891bcf703640fbe713c6cd0fe";
    const HAY_FRXETH = "0xf8a4cdf9efc4b9b38eaa6e27ee281cb2111fa664";
    const HAY_USDT = "0x5b0baf66718caabda49a4af32eb455c3b99b5821";
    const WBNB_STKBNB = "0x84b78452a97c5afda1400943333f691448069a29";
    const BNBX_FRAX = "0x8ab8fd902039a48e51735452b1f97c93cb034e80";
    const WUSDR_USDC = "0x3f8062cf591a918bc3b183fa241ec49efbd30e2b";
    const WUSDR_DOLA = "0xdb6bff81311c5c4f72668d9c4c8a5e2cb4584a82";
    // const USDT_ERN = "0x8dcdf3cbd3a588a2e2fb607bdc9180e4fefa583b";
    const WBNB_MATIC = "0x775cac1c1b47250121291934d15912efb69213e9";
    const WBNB_OATH = "0x055557c6606f7b0d34e617653c447f079b0b0a73";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 14,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 13,
    });
    lookup.set(BUSD, {
      pathIdx: [0, 1],
      path: [USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0],
      priority: 12,
    });
    lookup.set(WBNB, {
      pathIdx: [1, 0, 1],
      path: [WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0],
      priority: 11,
    });
    lookup.set(WETH, {
      pathIdx: [1, 1, 0, 1],
      path: [WETH_WBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 10,
    });
    lookup.set(BTCB, {
      pathIdx: [1, 1, 0, 1],
      path: [BTCB_WBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 9,
    });
    lookup.set(FRAX, {
      pathIdx: [0, 1, 1, 0, 1],
      path: [BNBX_FRAX, BNBX_WBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0, 0],
      priority: 8,
    });
    lookup.set(DOLA, {
      pathIdx: [0, 1],
      path: [WUSDR_DOLA, WUSDR_USDC],
      pathStartBlock: [0, 0],
      priority: 7,
    });
    lookup.set(ANKRBNB, {
      pathIdx: [1, 1, 0, 1],
      path: [ANKRBNB_WBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 6,
    });
    lookup.set(BNBX, {
      pathIdx: [1, 1, 0, 1],
      path: [BNBX_WBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 5,
    });
    lookup.set(FRXETH, {
      pathIdx: [0, 1, 1],
      path: [HAY_FRXETH, HAY_USDT, USDT_USDC],
      pathStartBlock: [0, 0, 0],
      priority: 4,
    });
    lookup.set(STKBNB, {
      pathIdx: [0, 1, 0, 1],
      path: [WBNB_STKBNB, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 3,
    });
    lookup.set(MATIC, {
      pathIdx: [0, 1, 0, 1],
      path: [WBNB_MATIC, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 2,
    });
    lookup.set(OATH, {
      pathIdx: [0, 1, 0, 1],
      path: [WBNB_OATH, WBNB_BUSD, USDT_BUSD, USDT_USDC],
      pathStartBlock: [0, 0, 0, 0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static polygonZkEvm(): TypedMap<string, BasePool> {
    const WETH = "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    const USDT = "0x1e4a5963abfd975d8c9021ce480b42188849d41d";
    const USDC = "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    const MATIC = "0xa2036f0538221a77a3937f1379699f44945018d0";
    const FRAX = "0xff8544fed5379d9ffa8d47a74ce6b91e632ac44d";

    const WETH_USDC = "0xc44ad482f24fd750caeba387d2726d8653f8c4bb";
    const USDT_USDC = "0x9591b8a30c3a52256ea93e98da49ee43afa136a8";
    const WETH_MATIC = "0xb73abfb5a2c89f4038baa476ff3a7942a021c196";
    const USDC_FRAX = "0xc4ad89d0a07081871f3007079f816b0757d2638e";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(MATIC, {
      pathIdx: [0, 1],
      path: [WETH_MATIC, WETH_USDC],
      pathStartBlock: [0, 0],
      priority: 2,
    });
    lookup.set(FRAX, {
      pathIdx: [0],
      path: [USDC_FRAX],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static avalanche(): TypedMap<string, BasePool> {
    // const WBTCe = "0x50b7545627a5162f82a992c33b87adc75187b218";
    const WETHe = "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab";
    // const DAIe = "0xd586e7f844cea2f87f50152665bcbc2c279d8d70";
    const USDT = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7";
    // const USDTe = "0xc7198437980c041c805a1edcba50c1ce5db95118";
    const USDC = "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e";
    // const USDCe = "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664";
    const WAVAX = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";

    // const WBTC_USDC = "";
    const WETHe_WAVAX = "0x724f6a02ed2eb82d8d45034b280903cf663731ab";
    // const DAI_USDC = "";
    const USDT_USDC = "0x128be8fcffc5ddc5e98d41dab8e0269afc46a0a0";
    const WAVAX_USDC = "0xfae3f424a0a47706811521e3ee268f00cfb5c45e";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WAVAX, {
      pathIdx: [1],
      path: [WAVAX_USDC],
      pathStartBlock: [32516926],
      priority: 2,
    });
    lookup.set(WETHe, {
      pathIdx: [1, 1],
      path: [WETHe_WAVAX, WAVAX_USDC],
      pathStartBlock: [31702336, 32516926],
      priority: 1,
    });
    // lookup.set(DAI, { pathIdx: [1], path: [DAI_USDC], priority: 4 });
    // lookup.set(WBTC, { pathIdx: [1], path: [WBTC_USDC], priority: 2 });

    return lookup as TypedMap<string, BasePool>;
  }

  static fantom(): TypedMap<string, BasePool> {
    const WBTC = "0x321162cd933e2be498cd2267a90534a804051b11";
    const WETH = "0x74b23882a30290451a17c44f4f05243b6b58c76d";
    const USDT = "0x049d68029688eabf473097a2fc38ef61633a3c7a";
    const USDC = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
    const WFTM = "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83";

    // const USDT_USDC = "";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 3,
    });
    // lookup.set(USDT, { pathIdx: [1], path: [USDT_USDC], priority: 2 });

    return lookup as TypedMap<string, BasePool>;
  }

  static moonbeam(): TypedMap<string, BasePool> {
    const WBTC = "0x922d641a426dcffaef11680e5358f34d97d112e1";
    const WETH = "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
    const USDT = "0xffffffffea09fb06d082fd1275cd48b191cbcd1d";
    const USDC = "0x931715fee2d06333043d11f658c8ce934ac61d0c";
    const WGLMR = "0xacc15dc74880c9944775448304b263d191c6077f";
    const DOT = "0xffffffff1fcacbd218edc0eba20fc2308c778080";

    const WGLMR_WBTC = "0x416bd9798d5214cae6f837c0a53a73beb3ced465";
    const WETH_WGLMR = "0x7e71d586ad01c0bf7953eb82e7b76c1338b0068c";
    const USDC_WGLMR = "0xab8c35164a8e3ef302d18da953923ea31f0fe393";
    const DOT_USDT = "0x5daf7f80cc550ee6249a4635c3bb0678e94d3867";
    const WGLMR_DOT = "0xb13b281503f6ec8a837ae1a21e86a9cae368fcc5";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 6,
    });
    lookup.set(WGLMR, {
      pathIdx: [0],
      path: [USDC_WGLMR],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(WETH, {
      pathIdx: [1, 0],
      path: [WETH_WGLMR, USDC_WGLMR],
      pathStartBlock: [0, 0],
      priority: 4,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 0],
      path: [WGLMR_WBTC, USDC_WGLMR],
      pathStartBlock: [0, 0],
      priority: 3,
    });
    lookup.set(DOT, {
      pathIdx: [0, 0],
      path: [WGLMR_DOT, USDC_WGLMR],
      pathStartBlock: [0, 0],
      priority: 2,
    });
    lookup.set(USDT, {
      pathIdx: [0, 0, 0],
      path: [DOT_USDT, WGLMR_DOT, USDC_WGLMR],
      pathStartBlock: [0, 0, 0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static mantle(): TypedMap<string, BasePool> {
    const WBTC = "0xcabae6f6ea1ecab08ad02fe02ce9a44f09aebfa2";
    const WETH = "0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111";
    const USDT = "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae";
    const USDC = "0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9";
    const WMNT = "0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8";

    const USDC_USDT = "0x16867d00d45347a2ded25b8cdb7022b3171d4ae0";
    const USDT_WMNT = "0x262255f4770aebe2d0c8b97a46287dcecc2a0aff";
    const USDT_WETH = "0xa125af1a4704044501fe12ca9567ef1550e430e8";
    const USDT_WBTC = "0xb11d56e78076df5b4fea0f3f9f1febdb043fabf3";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [0, 0],
      path: [USDT_WETH, USDC_USDT],
      pathStartBlock: [0, 0],
      priority: 2,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 0],
      path: [USDT_WBTC, USDC_USDT],
      pathStartBlock: [0, 0],
      priority: 1,
    });
    lookup.set(WMNT, {
      pathIdx: [0, 0],
      path: [USDT_WMNT, USDC_USDT],
      pathStartBlock: [0, 0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static linea(): TypedMap<string, BasePool> {
    const WBTC = "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4";
    const WETH = "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
    const USDT = "0xa219439258ca9da29e9cc4ce5596924745e12b93";
    const USDC = "0x176211869ca2b568f2a7d4ee941e073a821ee1ff";
    const BUSD = "0x7d43aabc515c356145049227cee54b608342c0ad";

    const USDC_USDT = "0x6e9ad0b8a41e2c148e7b0385d3ecbfdb8a216a9b";
    const USDC_WETH = "0x3cb104f044db23d6513f2a6100a1997fa5e3f587";
    const WBTC_WETH = "0x8e80016b025c89a6a270b399f5ebfb734be58ada";
    const USDC_BUSD = "0xd4d4d99b26e7c96c70f32b417870aad2d51374a5";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDC_WETH],
      pathStartBlock: [180201],
      priority: 2,
    });
    lookup.set(WBTC, {
      pathIdx: [1, 0],
      path: [WBTC_WETH, USDC_WETH],
      pathStartBlock: [0, 0],
      priority: 1,
    });
    lookup.set(BUSD, {
      pathIdx: [0],
      path: [USDC_BUSD],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static base(): TypedMap<string, BasePool> {
    const USDbC = "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca";
    const DAI = "0x50c5725949a6f0c72e6c4a641f24049a917db0cb";
    const WETH = "0x4200000000000000000000000000000000000006";

    const DAI_USDbC = "0x2c1e1a69ee809d3062ace40fb83a9bfb59623d95";
    const WETH_USDbC = "0xe0712c087ecb8a0dd20914626152ebf4890708c2";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDbC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(DAI, {
      pathIdx: [1],
      path: [DAI_USDbC],
      pathStartBlock: [2526643],
      priority: 1,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDbC],
      pathStartBlock: [2614415],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static rollux(): TypedMap<string, BasePool> {
    const USDC = "0x368433cac2a0b8d76e64681a9835502a1f2a8a30";
    const USDT = "0x28c9c7fb3fe3104d2116af26cc8ef7905547349c";
    const WETH = "0xaa1c53afd099e415208f47fcfa2c880f659e6904";
    const PSYS = "0x48023b16c3e81aa7f6effbdeb35bb83f4f31a8fd";

    const USDT_USDC = "0x197e0865e759235699a758c5428944964627cde1";
    const USDT_WETH = "0xd3ef8d514deb494c252fd9735134807b3a4527b6";
    const USDT_PSYS = "0xab07b0c933dacb9d776af7dfaa814a4e3bea8d9a";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [368379],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [0, 1],
      path: [USDT_WETH, USDT_USDC],
      pathStartBlock: [369577, 368379],
      priority: 2,
    });
    lookup.set(PSYS, {
      pathIdx: [0, 1],
      path: [USDT_PSYS, USDT_USDC],
      pathStartBlock: [227780, 368379],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static kava(): TypedMap<string, BasePool> {
    const USDC = "0xeb466342c4d449bc9f53a865d5cb90586f405215";
    const USDT = "0x919c1c267bc06a7039e03fcc2ef738525769109c";

    const USDT_USDC = "0x4a18f16b6a4f695639b0d1390263def2e91fc60f";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static metis(): TypedMap<string, BasePool> {
    const USDC = "0xea32a96608495e54156ae48931a7c20f0dcc1a21";
    const USDT = "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc";
    const WETH = "0x420000000000000000000000000000000000000a";
    const METIS = "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
    const WMETIS = "0x75cb093e4d61d2a2e65d8e0bbb01de8d89b53481";

    const USDT_USDC = "0xa1b0a025669eae9dd3133e9fa2c2c30ea8399b2a";
    const WETH_USDC = "0x35096c3ca17d12cbb78fa4262f3c6eff73ac9ffc";
    const METIS_USDC = "0xa17aded3b6a12fb4691c830aa8caad785d15e5bc";
    const WMETIS_USDC = "0xa4e4949e0cccd8282f30e7e113d8a551a1ed1aeb";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(METIS, {
      pathIdx: [1],
      path: [METIS_USDC],
      pathStartBlock: [0],
      priority: 1,
    });
    lookup.set(WMETIS, {
      pathIdx: [1],
      path: [WMETIS_USDC],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static manta(): TypedMap<string, BasePool> {
    const USDC = "0xb73603c5d87fa094b7314c74ace2e64d165016fb";
    const WETH = "0x0dc808adce2099a9f62aa87d9670745aba741746";
    const STONE = "0xec901da9c68e90798bbbb74c11406a32a70652c3";
    const WBTC = "0x305e88d809c9dc03179554bfbf85ac05ce8f18d6";
    const wUSDM = "0xbdad407f77f44f7da6684b416b1951eca461fb07";
    const MANTA = "0x95cef13441be50d20ca4558cc0a27b601ac544e5";

    const WETH_USDC = "0x12cdded759b14bf6a34fbf6638aec9b735824a9e";
    const WETH_STONE = "0xa5101d48355d5d731c2bedd273aa0eb7ed55d0c7";
    const WETH_WBTC = "0xfc9ffc1c6e0ebf7be3ce93245b309f4d3b593101";
    const USDC_wUSDM = "0xd48deca9daa46dad52a5aaa8e62060df367b08e8";
    const WETH_MANTA = "0x97433019b560c1c20055ba5edc8eef226f2d1be7";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [505816],
      priority: 4,
    });
    lookup.set(STONE, {
      pathIdx: [0, 1],
      path: [WETH_STONE, WETH_USDC],
      pathStartBlock: [847285, 505816],
      priority: 3,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 1],
      path: [WETH_WBTC, WETH_USDC],
      pathStartBlock: [511582, 505816],
      priority: 2,
    });
    lookup.set(wUSDM, {
      pathIdx: [0],
      path: [USDC_wUSDM],
      pathStartBlock: [978774],
      priority: 1,
    });
    lookup.set(MANTA, {
      pathIdx: [0, 1],
      path: [WETH_MANTA, WETH_USDC],
      pathStartBlock: [1136768, 505816],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static opbnb(): TypedMap<string, BasePool> {
    const USDT = "0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3";
    const WBNB = "0x4200000000000000000000000000000000000006";

    const WBNB_USDT = "0xc4f981189558682f15f60513158b699354b30204";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDT, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WBNB, {
      pathIdx: [1],
      path: [WBNB_USDT],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static gnosis(): TypedMap<string, BasePool> {
    const USDC = "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83";
    const WXDAI = "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
    const WETH = "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1";

    const USDC_WXDAI = "0x6a1507579b50abfc7ccc8f9e2b428095b5063538";
    const WETH_WXDAI = "0x4a3fec341be7134b8ef9e9edb6bf63ae2ba17f43";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WXDAI, {
      pathIdx: [0],
      path: [USDC_WXDAI],
      pathStartBlock: [0],
      priority: 1,
    });
    lookup.set(WETH, {
      pathIdx: [1, 0],
      path: [WETH_WXDAI, USDC_WXDAI],
      pathStartBlock: [0, 0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static astarZkEvm(): TypedMap<string, BasePool> {
    const WETH = "0xe9cc37904875b459fa5d0fe37680d36f1ed55e38";
    const USDT = "0x1e4a5963abfd975d8c9021ce480b42188849d41d";
    const USDC = "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    const ASTR = "0xdf41220c7e322bfef933d85d01821ad277f90172";
    const WBTC = "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1";

    const USDC_WETH = "0x47d7b9510ae2835c7c293825641a5427226d34cb";
    const USDT_USDC = "0x9331b844a67accddcc103b6a84237a589f8c1d96";
    const USDC_ASTR = "0x002a6b6a1348b33d03ab66fcb64937b8cbf2aa7c";
    const ASTR_WBTC = "0xdc014394c439e152394e92ab013ece1f91c718d7";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 5,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDC_WETH],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(ASTR, {
      pathIdx: [0],
      path: [USDC_ASTR],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 0],
      path: [ASTR_WBTC, USDC_ASTR],
      pathStartBlock: [0, 0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static immutableZkEvm(): TypedMap<string, BasePool> {
    const USDC = "0x6de8acc0d406837030ce4dd28e7c08c5a96a30d2";
    const WETH = "0x52a6c53869ce09a731cd772f245b97a4401d3348";
    const WIMX = "0x3a0c2ba54d6cbd3121f01b96dfd20e99d1696c9d";

    const WETH_USDC = "0xb80121a9a29259796df6439896b1da6f5342c658";
    const WIMX_USDC = "0x525299ce36040baee478d17ec26fe5962a75a304";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WIMX, {
      pathIdx: [1],
      path: [WIMX_USDC],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static blast(): TypedMap<string, BasePool> {
    const USDB = "0x4300000000000000000000000000000000000003";
    const WETH = "0x4300000000000000000000000000000000000004";

    const USDB_WETH = "0xf00da13d2960cf113edcef6e3f30d92e52906537";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDB, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDB_WETH],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static scroll(): TypedMap<string, BasePool> {
    const USDC = "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    const USDT = "0xf55bec9cafdbe8730f096aa55dad6d22d44099df";
    const WETH = "0x5300000000000000000000000000000000000004";

    const USDC_USDT = "0xf1783f3377b3a70465c193ef33942c0803121ba0";
    const USDC_WETH = "0x813df550a32d4a9d42010d057386429ad2328ed9";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 1,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDC_WETH],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static xlayer(): TypedMap<string, BasePool> {
    // const USDC = "0x74b7f16337b8972027f6196a17a631ac6de26d22";
    const USDT = "0x1e4a5963abfd975d8c9021ce480b42188849d41d";
    const WETH = "0x5a77f1443d16ee5761d310e38b62f77f726bc71c";
    const WOKB = "0xe538905cf8410324e03a5a23c1c177a474d59b2b";

    const USDT_WETH = "0xfe197ffb4fedcdf1fe8a738bf9e6adc9485fe0d9";
    const USDT_WOKB = "0x4041435e96484afb8fb4d78719531f2c8efe0877";

    let lookup = new TypedMap<string, BasePool>();
    // lookup.set(USDC, {
    //   pathIdx: [-1],
    //   path: [ADDRESS_ZERO],
    //   pathStartBlock: [0],
    //   priority: 5,
    // });
    lookup.set(USDT, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDT_WETH],
      pathStartBlock: [2711376],
      priority: 3,
    });
    lookup.set(WOKB, {
      pathIdx: [0],
      path: [USDT_WOKB],
      pathStartBlock: [2156668],
      priority: 2,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static mode(): TypedMap<string, BasePool> {
    const USDC = "0xd988097fb8612cc24eec14542bc03424c656005f";
    const WETH = "0x4200000000000000000000000000000000000006";

    const WETH_USDC = "0x468cc91df6f669cae6cdce766995bd7874052fbc";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 0,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static rootstock(): TypedMap<string, BasePool> {
    const RUSDT = "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    const WRBTC = "0x542fda317318ebf1d3deaf76e0b632741a7e677d";
    const ETHS = "0x1d931bf8656d795e50ef6d639562c5bd8ac2b78f";

    const WRBTC_RUSDT = "0xd2ffe51ab4e622a411abbe634832a19d919e9c55";
    const ETHS_WRBTC = "0xcba7abe98fd6a65259837d76a3409841c1dd4288";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(RUSDT, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WRBTC, {
      pathIdx: [1],
      path: [WRBTC_RUSDT],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(ETHS, {
      pathIdx: [1, 1],
      path: [ETHS_WRBTC, WRBTC_RUSDT],
      pathStartBlock: [0, 0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static taiko(): TypedMap<string, BasePool> {
    const USDC = "0x07d83526730c7438048d55a4fc0b850e2aab6f0b";
    const USDT = "0x2def195713cf4a606b49d07e520e22c17899a736";
    const WETH = "0xa51894664a773981c6c112c43ce576f315d5b1b6";
    const WBTC = "0xc4c410459fbaf8f7f86b6cee52b4fa1282ff9704";

    const USDC_USDT = "0x4e35666b3ebf367842b9b6d5b297a2a069f862f5";
    const USDC_WETH = "0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b";
    const WETH_WBTC = "0xcbf2e8520b88c4ec30b2b6ddfaa2900087b42d55";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [0],
      path: [USDC_WETH],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WBTC, {
      pathIdx: [0, 0],
      path: [WETH_WBTC, USDC_WETH],
      pathStartBlock: [0, 0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static sei(): TypedMap<string, BasePool> {
    const USDC = "0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1";
    const USDT = "0xb75d0b03c06a926e488e2659df1a861f860bd3d1";
    const WETH = "0x160345fc359604fc6e70e3c5facbde5f7a9342d8";
    const WSEI = "0xe30fedd158a2e3b13e9badaeabafc5516e95e8c7";

    const USDC_USDT = "0x41eea09c971294fcde3b6e553902b04a47be7442";
    const WETH_USDC = "0x8a1a9efb7f7f74ace10a31f2f5f9f7e804f957b1";
    const USDC_WSEI = "0x5cfa8db453c9904511c4ea9eb0bfc903e36b9f5f";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [0],
      path: [USDC_USDT],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDC],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WSEI, {
      pathIdx: [0],
      path: [USDC_WSEI],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static iota(): TypedMap<string, BasePool> {
    const USDC = "0xfbda5f676cb37624f28265a144a48b0d6e87d3b6";
    const USDT = "0xc1b8045a6ef2934cf0f78b0dbd489969fa9be7e4";
    const WETH = "0x160345fc359604fc6e70e3c5facbde5f7a9342d8";
    const WIOTA = "0x6e47f8d48a01b44df3fff35d258a10a3aedc114c";

    const WETH_USDT = "0x38f7eb78dbd6032ee8c24590b0162f95bd5f557c";
    const WIOTA_USDT = "0x02edcb27fccc80adc71640971dbc711ec39810e0";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 4,
    });
    lookup.set(USDT, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 3,
    });
    lookup.set(WETH, {
      pathIdx: [1],
      path: [WETH_USDT],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(WIOTA, {
      pathIdx: [1],
      path: [WIOTA_USDT],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static zircuit(): TypedMap<string, BasePool> {
    const USDC = "0x0000000000000000000000000000000000000000";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static core(): TypedMap<string, BasePool> {
    const USDC = "0xa4151b2b3e269645181dccf2d426ce75fcbdeca9";
    const USDT = "0x900101d06a7426441ae63e9ab3b9b0f63be145f1";

    const USDT_USDC = "0xd8f1c33d35cb471681385598d456d49c56ed2d51";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 2,
    });
    lookup.set(USDT, {
      pathIdx: [1],
      path: [USDT_USDC],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static bartio(): TypedMap<string, BasePool> {
    const HONEY = "0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(HONEY, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static worldchain(): TypedMap<string, BasePool> {
    const USDC = "0x79a02482a880bce3f13e09da970dc34db4cd24d1";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(USDC, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static apechain(): TypedMap<string, BasePool> {
    const APE_USD = "0xa2235d059f80e176d931ef76b6c51953eb3fbef4";

    let lookup = new TypedMap<string, BasePool>();
    lookup.set(APE_USD, {
      pathIdx: [-1],
      path: [ADDRESS_ZERO],
      pathStartBlock: [0],
      priority: 1,
    });

    return lookup as TypedMap<string, BasePool>;
  }

  static nonBase(): BasePool {
    let lookup: BasePool = {
      path: [ADDRESS_ZERO],
      pathIdx: [-1],
      pathStartBlock: [-1],
      priority: -1,
    };
    return lookup as BasePool;
  }

  static network(network: string): TypedMap<string, BasePool> {
    let mapping = new TypedMap<string, BasePool>();
    if (network == "mainnet") {
      mapping = this.mainnet();
    } else if (network == "matic") {
      mapping = this.polygon();
    } else if (network == "arbitrum-one") {
      mapping = this.arbitrumOne();
    } else if (network == "optimism") {
      mapping = this.optimism();
    } else if (network == "celo") {
      mapping = this.celo();
    } else if (network == "bsc") {
      mapping = this.bsc();
    } else if (network == "polygon-zkevm") {
      mapping = this.polygonZkEvm();
    } else if (network == "avalanche") {
      mapping = this.avalanche();
    } else if (network == "fantom") {
      mapping = this.fantom();
    } else if (network == "moonbeam") {
      mapping = this.moonbeam();
    } else if (network == "mantle") {
      mapping = this.mantle();
    } else if (network == "linea") {
      mapping = this.linea();
    } else if (network == "base") {
      mapping = this.base();
    } else if (network == "syscoin") {
      mapping = this.rollux();
    } else if (network == "kava-evm") {
      mapping = this.kava();
    } else if (network == "metis") {
      mapping = this.metis();
    } else if (network == "manta-pacific-mainnet") {
      mapping = this.manta();
    } else if (network == "opbnb-mainnet") {
      mapping = this.opbnb();
    } else if (network == "gnosis") {
      mapping = this.gnosis();
    } else if (network == "astar-zkevm-mainnet") {
      mapping = this.astarZkEvm();
    } else if (network == "imtbl-zkevm") {
      mapping = this.immutableZkEvm();
    } else if (network == "blast-mainnet") {
      mapping = this.blast();
    } else if (network == "scroll") {
      mapping = this.scroll();
    } else if (network == "xlayer-mainnet") {
      mapping = this.xlayer();
    } else if (network == "mode-mainnet") {
      mapping = this.mode();
    } else if (network == "rootstock") {
      mapping = this.rootstock();
    } else if (network == "taiko") {
      mapping = this.taiko();
    } else if (network == "sei-mainnet") {
      mapping = this.sei();
    } else if (network == "iota") {
      mapping = this.iota();
    } else if (network == "48900") {
      mapping = this.zircuit();
    } else if (network == "core") {
      mapping = this.core();
    } else if (network == "berachain-bartio") {
      mapping = this.bartio();
    } else if (network == "worldchain") {
      mapping = this.worldchain();
    } else if (network == "apechain-mainnet") {
      mapping = this.apechain();
    }

    return mapping as TypedMap<string, BasePool>;
  }
}
