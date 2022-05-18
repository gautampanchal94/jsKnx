export enum KnxServiceType {
    SEARCH_REQUEST = "SEARCH_REQUEST",
    SEARCH_RESPONSE = "SEARCH_RESPONSE",
    DESCRIPTION_REQUEST = "DESCRIPTION_REQUEST",
    DESCRIPTION_RESPONSE = "DESCRIPTION_RESPONSE",
    CONNECTION_REQUEST = "CONNECTION_REQUEST",
    CONNECTION_RESPONSE = "CONNECTION_RESPONSE",
    CONNECTIONSTATE_REQUEST = "CONNECTIONSTATE_REQUEST",
    CONNECTIONSTATE_RESPONSE = "CONNECTIONSTATE_RESPONSE",
    DISCONNECT_REQUEST = "DISCONNECT_REQUEST",
    DISCONNECT_RESPONSE = "DISCONNECT_RESPONSE",
    TUNNEL_REQUEST = "TUNNEL_REQUEST",
    TUNNEL_RESPONSE = "TUNNEL_RESPONSE",
    DEVICE_CONFIGURATION_REQUEST = "DEVICE_CONFIGURATION_REQUEST",
    DEVICE_CONFIGURATION_ACK = "DEVICE_CONFIGURATION_ACK",
    ROUTING_INDICATION = "ROUTING_INDICATION"
}

export const KnxServiceDescriptor: { [key in KnxServiceType]: number[] } = {
    SEARCH_REQUEST: [0x02, 0x01],
    SEARCH_RESPONSE: [0x02, 0x02],
    DESCRIPTION_REQUEST: [0x02, 0x03],
    DESCRIPTION_RESPONSE: [0x02, 0x04],
    CONNECTION_REQUEST: [0x02, 0x05],
    CONNECTION_RESPONSE: [0x02, 0x06],
    CONNECTIONSTATE_REQUEST: [0x02, 0x07],
    CONNECTIONSTATE_RESPONSE: [0x02, 0x08],
    DISCONNECT_REQUEST: [0x02, 0x09],
    DISCONNECT_RESPONSE: [0x02, 0x0a],
    TUNNEL_REQUEST: [0x04, 0x20],
    TUNNEL_RESPONSE: [0x04, 0x21],
    DEVICE_CONFIGURATION_REQUEST: [0x03, 0x10],
    DEVICE_CONFIGURATION_ACK: [0x03, 0x11],
    ROUTING_INDICATION: [0x05, 0x30],
}

