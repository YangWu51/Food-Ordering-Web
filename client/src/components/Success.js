import React from "react";

export default function loading({success}) {
    return (
        <div>
            <div class="alert alert-success" role="alert">
            {success}
            </div>

        </div>
    )
}


