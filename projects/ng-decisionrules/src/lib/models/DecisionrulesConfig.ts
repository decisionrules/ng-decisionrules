import { DecisionrulesAuth } from "./decisionrulesAuth";
import { DecisionrulesGeoloc } from "./decisionrulesGeoloc";

export interface DecisionRulesConfig {
    auth: DecisionrulesAuth;
    geoloc: DecisionrulesGeoloc;
}