(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue; //Replacing substitutions for sanity
    	v = v.replace(/\bthe\switnesses\b/g, "(wat)these dudes I know");
        v = v.replace(/\bThe\sWitnesses\b/g, "(wat)These dudes I know");
    	v = v.replace(/\bthe\sWitnesses\b/g, "(wat)these dudes I know");
        v = v.replace(/\bThe\switnesses\b/g, "(wat)These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "(wat)these dudes I know");
        v = v.replace(/\bWitnesses\b/g, "(wat)These dudes I know");
        v = v.replace(/\bwitness\b/g, "(wat)this dude I know");
        v = v.replace(/\bWitness\b/g, "(wat)This dude I know");
        v = v.replace(/\ballegedly\b/g, "(wat)kinda probably");
        v = v.replace(/\bAllegedly\b/g, "(wat)Kinda probably");
        v = v.replace(/\bnew\sstudies\b/g, "(wat)Tumblr posts");
        v = v.replace(/\bNew\sstudies\b/g, "(wat)Tumblr posts");
        v = v.replace(/\bnew\sStudies\b/g, "(wat)Tumblr Posts");
        v = v.replace(/\bNew\sStudies\b/g, "(wat)Tumblr Posts");
        v = v.replace(/\bnew\sstudy\b/g, "(wat)Tumblr post");
        v = v.replace(/\bNew\sstudy\b/g, "(wat)Tumblr post");
        v = v.replace(/\bnew\sStudy\b/g, "(wat)Tumblr Post");
        v = v.replace(/\bNew\sStudy\b/g, "(wat)Tumblr Post");
        v = v.replace(/\brebuild\b/g, "(wat)avenge");
        v = v.replace(/\bRebuild\b/g, "(wat)Avenge");
        v = v.replace(/\bspace\b/g, "spaaace"); //no real need to replace here.
        v = v.replace(/\bSpace\b/g, "Spaaace"); //ibid
        v = v.replace(/\bGoogle\sGlass\b/g, "(wat)Virtual Boy");
        v = v.replace(/\bgoogle\sglass\b/g, "(wat)virtual boy");
        v = v.replace(/\bgoogle\sGlass\b/g, "(wat)virtual boy");
        v = v.replace(/\bGoogle\sglass\b/g, "(wat)Virtual Boy");
        v = v.replace(/\bsmartphones\b/g, "(wat)pokédexes");
        v = v.replace(/\bSmartphones\b/g, "(wat)Pokédexes");
        v = v.replace(/\bsmartphone\b/g, "(wat)pokédex");
        v = v.replace(/\bSmartphone\b/g, "(wat)Pokédex");
        v = v.replace(/\belectric\b/g, "(wat)atomic");
        v = v.replace(/\bElectric\b/g, "(wat)Atomic");
        v = v.replace(/\bsenators\b/g, "(wat)elf-lords");
        v = v.replace(/\bSenators\b/g, "(wat)Elf-lords");
        v = v.replace(/\bsenator\b/g, "(wat)elf-lord");
        v = v.replace(/\bSenator\b/g, "(wat)Elf-lord");
        v = v.replace(/\bcars\b/g, "cats"); // too simple to need change
        v = v.replace(/\bCars\b/g, "Cats"); // too simple to need change
        v = v.replace(/\bcar\b/g, "cat"); // too simple to need change
        v = v.replace(/\bCar\b/g, "Cat"); // too simple to need change
        v = v.replace(/\belections\b/g, "(wat)eating contests");
        v = v.replace(/\bElections\b/g, "(wat)Eating Contests");
        v = v.replace(/\belection\b/g, "(wat)eating contest");
        v = v.replace(/\bElection\b/g, "(wat)Eating Contest");
        v = v.replace(/\bcongressional\sleaders\b/g, "(wat)river spirits");
        v = v.replace(/\bCongressional\sleaders\b/g, "(wat)River spirits");
        v = v.replace(/\bcongressional\sLeaders\b/g, "(wat)river spirits");
        v = v.replace(/\bCongressional\sLeaders\b/g, "(wat)River Spirits");
        v = v.replace(/\bcongressional\sleader\b/g, "(wat)river spirit");
        v = v.replace(/\bCongressional\sleader\b/g, "(wat)River spirit");
        v = v.replace(/\bcongressional\sLeader\b/g, "(wat)river spirit");
        v = v.replace(/\bCongressional\sLeader\b/g, "(wat)River Spirit");
        v = v.replace(/\bHomeland\ssecurity\b/g, "(wat)Homestar runner");
        v = v.replace(/\bHomeland\sSecurity\b/g, "(wat)Homestar Runner");
        v = v.replace(/\bhomeland\ssecurity\b/g, "(wat)homestar runner");
        v = v.replace(/\bhomeland\sSecurity\b/g, "(wat)homestar Runner");
        v = v.replace(/\bcould\snot\sbe\sreached\sfor\scomment\b/gi, "(wat)is guilty and everyone knows it(/wat)"); //needed a ending part due to length.
        v = v.replace(/\bkeyboards\b/g, "leopards");
        v = v.replace(/\bKeyboards\b/g, "Leopards");
        v = v.replace(/\bkeyboard\b/g, "leopards");
        v = v.replace(/\bKeyboard\b/g, "Leopards");
    
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
