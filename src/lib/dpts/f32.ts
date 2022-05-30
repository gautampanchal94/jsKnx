import { F32 } from "./formats"
import { DPT } from "../enums"

export class DPT_Value_Power extends F32 {
    public readonly type: DPT = DPT.Value_Power
    public readonly unit: string = "W"
}

export class DPT_Value_Frequency extends F32 {
    public readonly type: DPT = DPT.Value_Frequency
    public readonly unit: string = "Hz"
}

export class DPT_Value_Electric_Potential extends F32 {
    public readonly type: DPT = DPT.Value_Electric_Potential
    public readonly unit: string = "V"
}

export class DPT_Value_Electric_Current extends F32 {
    public readonly type: DPT = DPT.Value_Electric_Current
    public readonly unit: string = "A"
}

export class DPT_Value_Power_Factor extends F32 {
    public readonly type: DPT = DPT.Value_Power_Factor
    public readonly unit: string = "°"
}

export class Value_ApparentPower extends F32 {
    public readonly type: DPT = DPT.Value_ApparentPower
    public readonly unit: string = "W"
}
