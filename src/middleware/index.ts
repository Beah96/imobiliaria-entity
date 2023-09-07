import { handleError } from "./handleError.middlewares";
import { verifyPermission, verifyIsAdm } from "./verifyAdmin.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { validateBody} from "./validateBody.middlewares";
import { verifyEmail } from "./verifyEmail.middleware";
import { verifyUser } from "./verifyUserId.middleware";
import { verifyCategory } from "./verifyCategoryName.middleware";
import { verifyAddress, verifyCategoryId  } from "./verifyAddCategory.middleware";
import { verifySchedule } from "./verifySchedule.middleware";
import { verifyRealEstate } from "./verifyRealEstate.middleware";

export default {
    handleError,
    validateBody,
    verifyPermission,
    verifyIsAdm,
    verifyToken,
    verifyEmail,
    verifyUser,
    verifyCategory,
    verifyAddress,
    verifyCategoryId,
    verifySchedule,
    verifyRealEstate 
}