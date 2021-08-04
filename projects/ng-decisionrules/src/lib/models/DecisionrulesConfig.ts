import { DecisionrulesAuth } from './decisionrulesAuth';
import { DecisionrulesGeoloc } from './decisionrulesGeoloc';
import {CustomDomainModel} from './customDomainModel';

export interface DecisionRulesConfig {
    auth: DecisionrulesAuth;
    customDomain?: CustomDomainModel;
    geoLoc?: DecisionrulesGeoloc;
}
