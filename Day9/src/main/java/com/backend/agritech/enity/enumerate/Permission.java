package com.backend.agritech.enity.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:READ"),
    ADMIN_CREATE("admin:CREATE"),
    ADMIN_UPDATE("admin:UPDATE"),
    ADMIN_DELETE("admin:DELETE"),

    USER_READ("user:READ"),
    USER_CREATE("user:CREATE"),
    USER_UPDATE("user:UPDATE"),
    USER_DELETE("user:DELETE")
    ;
    
    @Getter
    private final String permission;

}
