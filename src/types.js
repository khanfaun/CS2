
import { COMPETITIVE_MAPS, T_SIDE_ROLE_DEFINITIONS, CT_SIDE_ROLE_DEFINITIONS } from './data/constants.js';

export type MapName = typeof COMPETITIVE_MAPS[number];
export type Side = 'T' | 'CT';

// Explicitly define RoleDefinition to handle optional 'name' property
export interface RoleDefinition {
  readonly id: string;
  readonly role: string;
  readonly description: string;
  readonly name?: string;
}

export type TSideRoleDefinition = typeof T_SIDE_ROLE_DEFINITIONS[number];
export type CTSideRoleDefinition = typeof CT_SIDE_ROLE_DEFINITIONS[number];

export type Role = RoleDefinition['role'];

// --- Strategy Types ---

// T-Side strategy structure
export interface Task {
  role: string;
  task: string;
}

export interface TimelineEntry {
  time: string;
  tasks: Task[];
  note: string;
}

export interface TSideStrategy {
  name: string;
  timelines: TimelineEntry[];
}

// CT-Side strategy structure
export interface CTStrategy {
    name: string; // e.g., "Round: Full Buy"
    rowOrder: string[];
    data: {
        [category: string]: {
            [role: string]: string; 
        };
    };
}


// Unified strategy type
export type Strategy = TSideStrategy | CTStrategy;

/**
 * @deprecated Use TSideStrategy instead. This is an alias to fix type errors in data files.
 */
export type HardcodedStrategy = TSideStrategy;