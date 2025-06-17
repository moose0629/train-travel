export interface Station {
  name: string;
}

export class MainStation implements Station {
  name: string;

  subStations: SubStation[];
}

export class SubStation implements Station {
  name: string;

  region?: string;

  isBranchLine?: boolean = false;

  branchName?: string[];

  invalid?: boolean;
}