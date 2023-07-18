import { useState, useEffect } from "react";
import MovieImageArr from "./MovieImages";

export default function RankingGrid({ items, imgArr }) {
  const rankingGrid = [];
  const sTier = [];
  const aTier = [];
  const bTier = [];
  const cTier = [];
  const dTier = [];
  const fTier = [];

  function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
    if (rankNum > 0) {
      var item = items.find((o) => o.ranking === rankNum);
      cellCollection.push(
        <div id={`rank-${rankNum}`} className="rank-cell"></div>
      );
    } else {
      cellCollection.push(
        <div className="row-label">
          <h4>{rowLabel}</h4>
        </div>
      );
    }
  }

  function createCellsForRow(rowNum) {
    var rankNum = 0;
    var currCollection = [];
    var label = "";
    const numCells = 10;

    for (var a = 1; a <= numCells; a++) {
      rankNum = a === 1 ? 0 : numCells * (rowNum - 1) + a - rowNum;

      if (rowNum === 1) {
        currCollection = sTier;
        label = "S-Tier";
      } else if (rowNum === 2) {
        currCollection = aTier;
        label = "A-Tier";
      } else if (rowNum === 3) {
        currCollection = bTier;
        label = "B-Tier";
      } else if (rowNum === 4) {
        currCollection = cTier;
        label = "C-Tier";
      } else if (rowNum === 5) {
        currCollection = dTier;
        label = "D-Tier";
      } else if (rowNum === 6) {
        currCollection = fTier;
        label = "F-Tier";
      }
      pushCellMarkupToArr(currCollection, rankNum, label);
    }
  }

  function createCellsForRows() {
    const maxRows = 6;
    for (var row = 1; row <= maxRows; row++) {
      createCellsForRow(row);
    }
  }

  function createRowsForGrid() {
    rankingGrid.push(<div className="rank-row s-tier">{sTier}</div>);
    rankingGrid.push(<div className="rank-row a-tier">{aTier}</div>);
    rankingGrid.push(<div className="rank-row b-tier">{bTier}</div>);
    rankingGrid.push(<div className="rank-row c-tier">{cTier}</div>);
    rankingGrid.push(<div className="rank-row d-tier">{dTier}</div>);
    rankingGrid.push(<div className="rank-row f-tier">{fTier}</div>);

    return rankingGrid;
  }

  function createRankingGrid() {
    createCellsForRows();
    return createRowsForGrid();
  }
  return <div className="rankings">{createRankingGrid()}</div>;
}
