import { DataPointAbstract } from "./data-point-abstract"

export function fromBuffer(buf: Buffer): number {
    return buf.readUint8(0) & 0x01
}

export function  toBuffer(value: number, buf: Buffer): Buffer {
    buf.writeUint8((value & 0x01) === 1 ? 0x1 : 0x0, 0)
    return buf
}

export abstract class B1 extends DataPointAbstract<number> {

    protected decode(data: Buffer): number {
        return fromBuffer(data)
    }

    public async write(value: number): Promise<void> {
        return this.send(toBuffer(value, Buffer.alloc(1)))
    }

    public removeValueListener(cb: (value: number, unit: string, source: string) => void) {
        this.valueEvent.removeListener("value", cb)
        this.updateSubscription("value")
    }

    public addValueListener(cb: (value: number, unit: string, source: string) => void) {
        this.valueEvent.addListener("value", cb)
        this.updateSubscription("value")
    }
}

