import { KnxSchemaDeclaration } from "./types";
import { IDPT } from "./types";

import { Socket } from "dgram";
import { KnxIpMessage } from "./message";

export class KnxFunction {
    public constructor(private readonly functionName: string, private readonly locationName: string, private readonly knx: Knx) {

    }

    public async scanComponent<T extends IDPT>(name: string, type: new(addresses: string[], bus: Socket) => T): Promise<T> {
        return this.knx.getDataPoint<T>(await this.knx.scanComponent(name, this.functionName, this.locationName), type)
    }
}
export class Knx {
    public constructor(private readonly schema: KnxSchemaDeclaration, private readonly channel: number, private readonly tunnel: Socket, private readonly gateway: Socket) {
        tunnel.on('message', msg => {
            KnxIpMessage.decode(msg).dump("Tunnel message")
        })
    }

    /**
     * 
     * @param address device address
     * @param pin device input/output number
     * @returns 
     */
    public async scanGroups(address: string, pin: number): Promise<string[]> {
        return [address]
    }

    public async scanComponentByUid(uid: string): Promise<string[]> {
        return ['']
    }

    public async scanComponent(componentName: string, functionName: string, locationName: string): Promise<string[]> {
        return ['']
    }

    public async getFunction(functionName: string, locationName: string): Promise<KnxFunction> {
        return new KnxFunction(functionName, locationName, this)
    }

    public getDataPoint<T extends IDPT>(groups: string[], DataPointType: new(addresses: string[], bus: Socket) => T): T {
        return new DataPointType(groups, this.tunnel)
    }
}