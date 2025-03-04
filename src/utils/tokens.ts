/* eslint-disable prefer-const */
import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../generated/HypeRegistry/ERC20";
import { ERC20SymbolBytes } from "../../generated/HypeRegistry/ERC20SymbolBytes";
import { ERC20NameBytes } from "../../generated/HypeRegistry/ERC20NameBytes";
import { StaticTokenDefinition } from "../config/staticTokenDefinition";
import { BaseTokenDefinition } from "../config/baseTokenDefinition";
import { getOrCreateHypervisor } from "./uniswapV3/hypervisor";
import {
  Token,
  UniswapV3HypervisorConversion,
} from "../../generated/schema";
import { Token as TokenTemplate } from "../../generated/templates";
import { getOrCreatePool } from "./pool";
import {
  ZERO_BI,
  ZERO_BD,
  ADDRESS_ZERO,
  DEFAULT_DECIMAL,
  constantAddresses,
} from "../config/constants";
import { getOrCreatePoolQueue, getOrCreateProtocol } from "./entities";
import { poolTemplateCreate } from "./common/pool";

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

  // try types string and bytes32 for symbol
  let symbolValue = "unknown";
  let symbolResult = contract.try_symbol();
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol();
    if (!symbolResultBytes.reverted) {
      // for broken pairs that have no symbol function exposed
      if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
        symbolValue = symbolResultBytes.value.toString();
      } else {
        // try with the static definition
        let staticTokenDefinition =
          StaticTokenDefinition.fromAddress(tokenAddress);
        if (staticTokenDefinition != null) {
          symbolValue = staticTokenDefinition.symbol;
        }
      }
    }
  } else {
    symbolValue = symbolResult.value;
  }

  return symbolValue;
}

export function fetchTokenName(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractNameBytes = ERC20NameBytes.bind(tokenAddress);

  // try types string and bytes32 for name
  let nameValue = "unknown";
  let nameResult = contract.try_name();
  if (nameResult.reverted) {
    let nameResultBytes = contractNameBytes.try_name();
    if (!nameResultBytes.reverted) {
      // for broken exchanges that have no name function exposed
      if (!isNullEthValue(nameResultBytes.value.toHexString())) {
        nameValue = nameResultBytes.value.toString();
      } else {
        // try with the static definition
        let staticTokenDefinition =
          StaticTokenDefinition.fromAddress(tokenAddress);
        if (staticTokenDefinition != null) {
          nameValue = staticTokenDefinition.name;
        }
      }
    }
  } else {
    nameValue = nameResult.value;
  }

  return nameValue;
}

export function fetchTokenDecimals(tokenAddress: Address): i32 {
  let contract = ERC20.bind(tokenAddress);
  // try types uint8 for decimals
  let decimalValue = DEFAULT_DECIMAL;
  let decimalResult = contract.try_decimals();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  } else {
    // try with the static definition
    let staticTokenDefinition = StaticTokenDefinition.fromAddress(tokenAddress);
    if (staticTokenDefinition != null) {
      return staticTokenDefinition.decimals;
    }
  }

  return decimalValue as i32;
}

export function getOrCreateToken(tokenAddress: Address): Token {
  let token = Token.load(tokenAddress.toHex());

  if (token == null) {
    token = new Token(tokenAddress.toHex());
    token.symbol = fetchTokenSymbol(tokenAddress);
    token.name = fetchTokenName(tokenAddress);
    token.decimals = fetchTokenDecimals(tokenAddress);
    token.totalSupply = ZERO_BI;
    token.save();

    // Track token contract for any name/symbol changes
    TokenTemplate.create(tokenAddress);
  }

  return token as Token;
}

export function updateToken(tokenAddress: Address): void {
  const token = getOrCreateToken(tokenAddress);

  token.symbol = fetchTokenSymbol(tokenAddress);
  token.name = fetchTokenName(tokenAddress);

  token.save();
}

export function getOrCreateEthToken(): Token {
  let token = Token.load("ETH");

  if (token == null) {
    token = new Token("ETH");
    token.symbol = "ETH";
    token.name = "ETH";
    token.decimals = 18;
    token.totalSupply = ZERO_BI;
    token.save();
  }

  return token as Token;
}

function isToken(tokenAddress: Address, refAddress: Address): boolean {
  if (tokenAddress == refAddress) {
    return true;
  } else {
    return false;
  }
}

export function isUSDC(tokenAddress: Address): boolean {
  const protocol = getOrCreateProtocol();
  const addressLookup = constantAddresses.network(protocol.network);
  const usdcAddress = addressLookup.get("USDC");
  const usdceAddress = addressLookup.get("USDCe");
  const usdtMantleAddress = addressLookup.get("USDT_MANTLE");
  const usdtOpbnbAddress = addressLookup.get("USDT_OPBNB");
  const usdtXlayerAddress = addressLookup.get("USDT_XLAYER");
  const usdbAddress = addressLookup.get("USDB");
  const usdtRootstock = addressLookup.get("RUSDT")
  const usdtIota = addressLookup.get("USDT")
  const honeyBartio = addressLookup.get("HONEY");
  const apeUsd = addressLookup.get("APE_USD")

  if (usdcAddress) {
    if (tokenAddress == Address.fromString(usdcAddress)) {
      return true;
    }
  }

  if (usdceAddress) {
    if (tokenAddress == Address.fromString(usdceAddress)) {
      return true;
    }
  }

  if (usdtMantleAddress) {
    if (tokenAddress == Address.fromString(usdtMantleAddress)) {
      return true;
    }
  }

  if (usdtOpbnbAddress) {
    if (tokenAddress == Address.fromString(usdtOpbnbAddress)) {
      return true;
    }
  }

  if (usdtXlayerAddress) {
    if (tokenAddress == Address.fromString(usdtXlayerAddress)) {
      return true;
    }
  }

  if (usdbAddress) {
    if (tokenAddress == Address.fromString(usdbAddress)) {
      return true;
    }
  }

  if (usdtRootstock) {
    if (tokenAddress == Address.fromString(usdtRootstock)) {
      return true;
    }
  }

  if (usdtIota) {
    if (tokenAddress == Address.fromString(usdtIota)) {
      return true;
    }
  }

  if (honeyBartio) {
    if (tokenAddress == Address.fromString(honeyBartio)) {
      return true;
    }
  }

  if (apeUsd) {
    if (tokenAddress == Address.fromString(apeUsd)) {
      return true;
    }
  }

  return false;
}

export function isZero(tokenAddress: Address): boolean {
  return isToken(tokenAddress, Address.fromString(ADDRESS_ZERO));
}

export function isNullEthValue(value: string): boolean {
  return (
    value ==
    "0x0000000000000000000000000000000000000000000000000000000000000001"
  );
}

export function createConversion(address: string, blockNumber: BigInt): void {
  let hypervisor = getOrCreateHypervisor(Address.fromString(address));
  let pool = getOrCreatePool(Address.fromString(hypervisor.pool));
  let conversion = UniswapV3HypervisorConversion.load(address);
  // match with USDC and lookup pool address

  if (conversion == null) {
    conversion = new UniswapV3HypervisorConversion(address);

    const protocol = getOrCreateProtocol();

    let baseTokenLookup = BaseTokenDefinition.network(protocol.network);
    let token0Lookup = baseTokenLookup.get(pool.token0);
    if (token0Lookup == null) {
      token0Lookup = BaseTokenDefinition.nonBase();
    }
    let token1Lookup = baseTokenLookup.get(pool.token1);
    if (token1Lookup == null) {
      token1Lookup = BaseTokenDefinition.nonBase();
    }

    // Reference arrays are in reverse order of priority. i.e. larger index take precedence
    if (token0Lookup.priority > token1Lookup.priority) {
      // token0 is the base token
      conversion.baseToken = pool.token0;
      conversion.baseTokenIndex = 0;
      conversion.usdPath = token0Lookup.path;
      conversion.usdPathIndex = token0Lookup.pathIdx;
      conversion.usdPathStartBlock = token0Lookup.pathStartBlock;
    } else if (token1Lookup.priority > token0Lookup.priority) {
      // token1 is the base token
      conversion.baseToken = pool.token1;
      conversion.baseTokenIndex = 1;
      conversion.usdPath = token1Lookup.path;
      conversion.usdPathIndex = token1Lookup.pathIdx;
      conversion.usdPathStartBlock = token1Lookup.pathStartBlock;
    } else {
      // This means token0 == token1 == -1, unidentified base token
      conversion.baseToken = ADDRESS_ZERO;
      conversion.baseTokenIndex = -1;
      conversion.usdPath = [ADDRESS_ZERO];
      conversion.usdPathIndex = [-1];
      conversion.usdPathStartBlock = [-1];
    }
    conversion.priceTokenInBase = ZERO_BD;
    conversion.priceBaseInUSD = ZERO_BD;
    conversion.hypervisor = address;
    conversion.save();

    const queue = getOrCreatePoolQueue();
    const queueAddresses = queue.addresses;
    const queueStartBlocks = queue.startBlocks;

    for (let i = 0; i < conversion.usdPath.length; i++) {
      if (conversion.usdPath[i] != ADDRESS_ZERO) {
        if (blockNumber >= BigInt.fromI32(conversion.usdPathStartBlock[i])) {
          let pathPoolAddress = Address.fromString(conversion.usdPath[i]);
          let pool = getOrCreatePool(pathPoolAddress);
          pool.save();
          log.warning("Creating pool template for {}", [pathPoolAddress.toHex()])
          poolTemplateCreate(pathPoolAddress);
        } else {
          // Add pool to queue to be created
          queueAddresses.push(conversion.usdPath[i]);
          queueStartBlocks.push(
            BigInt.fromI32(conversion.usdPathStartBlock[i])
          );
        }
      }
    }
    queue.addresses = queueAddresses;
    queue.startBlocks = queueStartBlocks;
    queue.save();
  }
}
