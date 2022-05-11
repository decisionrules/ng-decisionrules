export enum ProtocolEnum{
  HTTP= 'http',
  HTTPS= 'https'
}

export class CustomDomainModel{
  customDomainUrl: string;
  customDomainProtocol: ProtocolEnum;
  customDomainPort: number;

  constructor(customDomainUrl: string, customDomainProtocol: ProtocolEnum, customPort: number) {
    this.customDomainProtocol = customDomainProtocol;
    this.customDomainUrl = customDomainUrl;
    this.customDomainPort = customPort;
  }

}
