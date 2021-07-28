import { DecisionrulesAuth } from './decisionrulesAuth';
import { DecisionrulesGeoloc } from './decisionrulesGeoloc';

export interface DecisionRulesConfig {
    auth: DecisionrulesAuth;
    customDomainUrl?: string;
    geoLoc?: DecisionrulesGeoloc;
}
