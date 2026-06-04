package fr.hytazia;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class LinkCommand implements CommandExecutor {
    // /link <code>
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if(!(sender instanceof Player)) return false;
        Player p = (Player) sender;
        if(args.length != 1){ p.sendMessage("Usage: /link <code>"); return true; }
        String code = args[0];
        // call API to confirm code and link account (implement HTTP call)
        p.sendMessage("Code envoyé au serveur pour vérification: " + code);
        return true;
    }
}
