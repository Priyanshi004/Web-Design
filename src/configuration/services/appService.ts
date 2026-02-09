import {APP_LINKS, AppLink} from "../../config/app.js";

export class AppService{
    static getAllApps(): AppLink[]{
        return APP_LINKS;
    }
    static getAppById(id:string):
    AppLink | undefined{
        return APP_LINKS.find(app=>app.id===id);
    }
    static getAppByCategory(category:string):
    AppLink[]{
        return APP_LINKS.filter(app=> app.category===category);
    }
    static getAppUrl(id: string): string | null {
    const app = this.getAppById(id);
    return app ? app.url : null;
    }
    static navigateToApp(id:string):
    void{
        const app=this.getAppById(id);  
        if(!app){
            console.error(`App with id ${id} not found`);
            return;
        }
        if(app.isExternal){
            window.open(app.url, '_blank');
        }else{
            window.location.href=app.url;
        }
    }
}