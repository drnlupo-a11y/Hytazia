package fr.hytazia;

import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class StorePlugin extends JavaPlugin {
    private String apiKey;

    @Override
    public void onEnable() {
        saveDefaultConfig();
        this.apiKey = getConfig().getString("api.key", "");
        getLogger().info("Hytazia StorePlugin enabled");
        // schedule polling task - simple example
        Bukkit.getScheduler().runTaskTimerAsynchronously(this, () -> {
            try {
                // call API to fetch pending orders (implement actual HTTP client)
            } catch (Exception e) {
                getLogger().warning("Error polling store API: " + e.getMessage());
            }
        }, 20L, 20L * 10);
    }
}
