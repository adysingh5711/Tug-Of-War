// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/TugWarContract.sol";

contract TugWarContractTest is Test {
  TugWarContract public tugWarContract;

  function setUp() public {
    tugWarContract = new TugWarContract(vm.addr(1));
  }

  function testPull() public {
    tugWarContract.pull(true);
    require(tugWarContract.team1Score() == 1);
    require(tugWarContract.ropePosition() == -1);
  }

  function testPull2() public {
    tugWarContract.pull(false);
    require(tugWarContract.team2Score() == 1);
    require(tugWarContract.ropePosition() == 1);
  }

  function testGetRopePosition() public {
    console.log("ropePosition");
    console.log(tugWarContract.ropePosition());
    require(tugWarContract.ropePosition() == 0);
  }
}
