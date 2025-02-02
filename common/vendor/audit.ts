## Rules generated by audit2allow

#============= gpsd ==============
allow gpsd system_data_file:file lock;

#============= hal_gnss_default ==============
allow hal_gnss_default system_data_file:fifo_file { read setattr write };

#============= migrate_legacy_obb_data ==============
allow migrate_legacy_obb_data rootfs:dir write;

#============= system_app ==============
allow system_app storaged:binder call;
allow system_app sysfs:file getattr;

#============= toolbox ==============
allow toolbox rootfs:dir open;

#============= vold ==============
allow vold rootfs:dir write;
