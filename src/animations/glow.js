export const glowHover = {
    whileHover:{
        boxShadow:
        "0 0 35px rgba(34,211,238,.25)"
    }
};

export const glowPulse={
    animate:{
        boxShadow:[
            "0 0 0 rgba(34,211,238,.2)",
            "0 0 20px rgba(34,211,238,.35)",
            "0 0 0 rgba(34,211,238,.2)"
        ]
    },

    transition:{
        duration:2.5,
        repeat:Infinity
    }
};